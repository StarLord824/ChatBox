import "./App.css"; 
import { ChatPage } from "./components/ChatSection/ChatPage";
import Header from "./components/Header/Header";

export function App() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-around">
      <Header isAuth={true} />
      <ChatPage />
    </div>
  );
}

export default App;
