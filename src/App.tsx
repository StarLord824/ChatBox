import axios from "axios";
import "./App.css"; 
import { ChatPage } from "./components/ChatSection/ChatPage";
import Header from "./components/Header/Header";
import { useState } from "react";
// import { Router , Link, Route, Routes } from "react-router-dom";

export function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="flex flex-col h-screen w-full items-center justify-around bg-black">
      <Header isAuth={isAuth} />
      {isAuth ? <ChatPage /> : <DoAuth auth={setIsAuth} />}
    </div>
  );
}

const DoAuth = (props: { auth: (isAuth: boolean) => void }) => {
  
  const signup = async ( data: { name: string, email: string, password: string } ) => {
    const result = await axios.post('http://localhost:3000/api/v1/user/signup', {
      name: data.name,
      email: data.email,
      password: data.password
    })
    console.log(result)
    props.auth(true)
    if(result.data.message==='Signup successful')
      props.auth(true)
    else
      alert('Invalid email or password')
  
  }

  const login = async ( data: { email: string, password: string } ) => {
    const result = await axios.post('http://localhost:3000/api/v1/user/login', {
      email: data.email,
      password: data.password
    })
    console.log(result)
    if(result.data.message==='Login successful')
      props.auth(true)
    else
      alert('Invalid email or password')
  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='flex flex-col items-center justify-center h-9/10 w-full mx-1 mb-1 px-2'>
      <div className='flex flex-col items-center justify-center h-screen w-full text-white'>
          
          <input type="text" placeholder="username" className='input-field' onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="email" className='input-field' onChange={(e) => setEmail(e.target.value)} /> 
          <input type="text" placeholder="password" className='input-field' onChange={(e) => setPassword(e.target.value)} />
          
          <div className="flex items-center justify-around w-1/4 mx-auto my-8 text-white">
            <button onClick={() => signup( { name, email, password } )} className='button'>Sign Up</button>
            <button onClick={() => login( { email, password } )} className='button'>Login</button>
          </div>
      </div>
    </div>
  )
}

export default App;
