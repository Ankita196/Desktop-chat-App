import { ChatEngine} from "react-chat-engine"

import './App.css'

import { ChatFeed } from "./components/ChatFeed"



function App() {
    return (
       <ChatEngine
       height="100vh"
       projectID="f95e2f3c-7ca2-4477-bc02-69e8c48e3ec9"
       userName="Ankita"
       userSecret="12345678"
       renderChatFeed={(chatAppProps)=> <ChatFeed  {...chatAppProps}/> }
            
       
       />
    )
}

export default App
