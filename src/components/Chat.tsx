import React, { useState, useEffect } from "react";
import { db } from "../config/firebase-config";
import { collection,
  addDoc,
  query,
  where,
  onSnapshot,
  DocumentData } from "firebase/firestore";

interface ChatProps {
  chatID: string;
}

const Chat: React.FC<ChatProps> = ({ chatID }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<DocumentData[]>([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), where("chatID", "==", chatID));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs: ((prevState: never[]) => never[]) | DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [chatID]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      await addDoc(collection(db, "messages"), {
        chatID,
        text: message,
        createdAt: new Date(),
      });
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded">
      <h1 className="text-xl font-bold mb-4">{chatID}</h1>
      <div className="w-full mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="border-b border-gray-300 p-2">
            {msg.text}
          </div>
        ))}
      </div>
      <form
        className="flex flex-col items-center w-full"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="Type ..."
          className="border-2 border-gray-300 p-2 mb-4 w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
