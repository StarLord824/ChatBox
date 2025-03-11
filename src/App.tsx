import { useState } from "react";
import Cookies from "universal-cookie";
import Auth from "./components/Auth";
import { ChatPage } from "./components/ChatPage";
// import Chat from "./components/Chat";
import "./App.css"; // Import the CSS file for styling

export function App() {
  const cookie = new Cookies();
  const [authStatus, setAuthStatus] = useState(
    cookie.get("authStatus") || false
  );
  // const [authStatus, setAuthStatus] = useState(true);

  console.log(authStatus);
  return (
    <div className="app-container">
      {/* <Chat chatID="abcd"></Chat> */}
      <h1 className="text-4xl font-bold text-center">Welcome to Chat App</h1>
      {authStatus ? <ChatPage /> : <Auth setAuthStatus={setAuthStatus} />}
    </div>
  );
}

export default App;
