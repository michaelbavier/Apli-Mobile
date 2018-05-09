import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import arrows from './arrows.svg';


ReactDOM.render(<MainContainer />, document.getElementById('root'));

// MainCONTAINER


function MainContainer(){
    return <div className="maincontainer"> <NoScroll/> <MessageForm/></div>
}

// DIV NOSCROLL

function NoScroll(){
    return <div className="noScroll"> <Container/></div>
}

// CONTAINER

function Container(){
 return  <div className="container"> <Sender/> <Hour/> <Receiver/> <Hour/> <Sender/> <Hour/> <Receiver/> <Hour/> <Sender/> <Hour/> <Receiver/> <Hour/> <Sender/> <Hour/> <Receiver/> <Hour/><Sender/> <Hour/> <Receiver/> <Hour/> <Sender/> <Hour/> <Receiver/> <Hour/> <Sender/> <Hour/> <Receiver/> <Hour/> <Sender/> <Hour/> <Receiver/></div>
}

// BULLE DE MESSAGE

function Sender(){
    return <div className="conversation sender"><p className="write">{"Oue a quel heure? a quel endrois? avec qui?"}</p></div>;
}

function Receiver(){
    return <div className="conversation receiver"><p className="write">{"hello les gars on boit un coup? oue avec Jean a Bruxelles vers 20h00  "}</p> </div>;
}

// L HEURE DES MESSAGES

function Hour(){
    return <p className="hour">{"53 min ago"}</p>
}


// CHAT

function MessageForm(){
    return  <div className="containerBox"><form className="messageForm"> <input className="text" /> <button className="arrows" ><i className="fa fa-arrow-up"></i></button> </form></div>
}




