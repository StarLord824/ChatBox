import Chat from "./Chat";
import ChatList from "./LeftSection/ChatList";

export function ChatPage() {
  return (
    <div className="flex items-center justify-between h-9/10 w-full mx-1 mb-1 px-2 shadow-md bg-black">
      <ChatList />
      <Chat />
    </div>
  );
} 