// import { PrismaClient } from '@prisma/client'
// import { useState } from 'react';
import Status from './Status';
import SearchChat from './SearchChat';
import List from './List';

// const client = new PrismaClient();

const ChatList = () => {
    // const [chats, setChats] = useState([]);
    // const [loading, setLoading] = useState(true);
    return (
        <div className='flex flex-col items-center justify-between h-full w-1/3 m-0.5 mx-2 bg-neutral-500 rounded-sm'>
            <Status/>
            <SearchChat/>
            <List/>
        </div>
    )
}

export default ChatList