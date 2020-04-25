import React from 'react'
import {CTX} from './Store'

export default function Dashboard() {

    // CTX store

    const [allChats] = React.useContext(CTX);

    console.log({allChats});

    const topics = Object.keys(allChats)

    //local state

    const [activeTopic, changeActiveTopic] = React.useState(topics[0])

    const [textValue, changeTextValue] = React.useState ('');
    return (
        <div className="app">
            <header className="topbar">
            <h1 className="logo">Kids Club</h1>
        </header>

        <div>
           <button className="sidebar-toggle" id="btnSide"><i className="fas fa-bars fa-lg"></i></button>
       </div>


       <aside className="sidebar open" id="sidebar">
            <div className="panel">
                <div className="search">
                    <input className="input-search" type="search" placeholder="Search" />
                   
                </div>
                <ul className="chat-list">
                    {
                      topics.map(topic => (

                    <li className="chat-list-item" onClick={e => changeActiveTopic(e.target.innerText)} key={topic}>
                        <img src="https://images.unsplash.com/photo-1519076976365-9c64dbd98317?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1341&q=80"
                            alt="" class="chat-img" />
                        {/* <span className="chat-list-name">Piano Class</span>
                        <span className="chat-list-time">17.00PM</span> */}
                        <span className="chat-list-pre">{topic}</span>
                    </li>

                      ))  
                    }
                    
                </ul>
         </div>
        </aside>

        <div className="chat" id="chat">
            <div class="chat-title">
                <span>
                    To:
                    <span className="chat-list-name">{activeTopic}</span>
                </span>
            </div>

            <div class="msg-bot me-msg">
                {
                    allChats[activeTopic].map((chat, i) => (
                   
                   <div className="msg-content" key={i}>
                       <div>{chat.from}</div>
                       <div className="msg-text" varient='p'>{chat.msg}</div>    
                   </div>
                    ))
                } 
            </div> 

            <footer>
                <div id="msg-form">
                    <i class="fas fa-paperclip fa-2x attach-icon"></i>
                    <input type="text" placeholder="type a message" value={textValue} onChange={e => changeTextValue(e.target.value)}/>
                    <button>Send</button>
                </div>
            </footer>

        </div>
            
        </div>
    )
}