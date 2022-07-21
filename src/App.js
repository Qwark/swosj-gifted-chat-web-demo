import React, {useCallback, useEffect, useState} from 'react'
import { GiftedChat, IMessage, User } from 'react-native-gifted-chat'
import { Dimensions } from 'react-native'
import './App.css'

const Chat = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    )
}

const App = () => {
    const { width, height } = Dimensions.get('window')

    return (
        <div style={{ width, height }}>
            <div>Badabinga</div>
            <Chat></Chat>
        </div>
    )
}

export default App
