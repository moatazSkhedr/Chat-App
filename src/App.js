import './App.css';
import Message from './Message';
import { useState , useEffect } from 'react';
// import Button from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import db from './firebase'
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';

function App() {
  const [input ,  setInput] = useState("");
  const [messages , setMessages] = useState([]);
  const [username , setUsername ] = useState("");
  console.log(username)
  
  // console.log(input);
  // console.log(messages);

  // this use effect use to read data from firebase when app lunched
  useEffect(()=>{
    // Read data from firebase 
    return ()=>db.collection("messeges").orderBy('timestamp' , "desc").onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(
        doc=>({id:doc.id , messege:doc.data()}
      )))
    })
  } , [])

  // this function use to handle submit an push data in firebase
  const handleSubmit = (e) =>{
    e.preventDefault();
    // add data in firebase 
    db.collection("messeges").add({
      messege:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages , {username:username , messege:input}]);
    setInput("");

  }
  const handleChange = (e)=>{
    setInput(e.target.value);
  }
  // this function use to handle change when the user enter the messege in input filed 
  useEffect(()=>{
    return ()=> setUsername(prompt("Please Enter Your Name "))
  } , [])
  // console.log(messages);

  return (
    <div className="App">
      <div className='app_header'>
        <img src='messenger.png' alt='messenger-icon'/>
        <h1>Chat App </h1>
        <h3>welcom : {username} </h3>
      </div>
      <div className='app_form'>
      <form onSubmit={handleSubmit}>
        <input type='text'  value ={input} onChange={handleChange} placeholder='Enter Your Message '/>
        <Button disabled={!input} type='submit'><SendIcon /></Button>
      </form>


      </div>
      <FlipMove>
      {
        messages.map(({messege , id} )=>{
         return  <Message key={id} username={username} messege={messege}/>
        })
      }

      </FlipMove>


    </div>
  );
}

export default App;
