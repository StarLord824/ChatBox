import { useRef, useState } from "react";
import Chat from "./Chat";

export function ChatPage() {
  const [chatID, setChatID] = useState<string>("");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {chatID ? (
        <>
          <h1 className="text-3xl font-bold">ChatRoom Accessed</h1>
          <Chat chatID={chatID} />
        </>
      ) : (
        <Enter setChatID={setChatID} />
      )}
    </div>
  );
}

function Enter({
  setChatID,
}: {
  setChatID: React.Dispatch<React.SetStateAction<string>>;
}) {
  const roomRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center mb-4">Enter Chat ID</h1>
      <input
        type="text"
        className="border-2 border-black p-2 mb-4"
        ref={roomRef}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          if (roomRef.current !== null) setChatID(roomRef.current.value);
        }}
      >
        Enter
      </button>
    </div>
  );
}
