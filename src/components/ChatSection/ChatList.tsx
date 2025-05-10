import { PrismaClient } from '@prisma/client'
import { useState } from 'react';

const client = new PrismaClient();
const ChatList = () => {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    return (
        <div>

        </div>
    )
}

export default ChatList