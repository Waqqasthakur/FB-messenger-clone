import './App.css';
import { Input, IconButton, Button, FormControl, InputLabel, FormHelperText } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');


  // useState is variable in React
  // useEffect ia a code snippet that is executed on a condition

  useEffect(() => {
    //const name = promt('Please enter your Name')
    setUsername(prompt('Please enter your name'))
    
  }, [])

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message: doc.data()})))
    })
  }, [])

  const sendMessage = (event) => {
     //send message logic
     event.preventDefault();
     db.collection('messages').add({
       message: input,
       username: username,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
     })
     setMessages([...messages, {username: username, message: input}]);
     setInput('');
  }

  return (
    <div className = 'App'>
      <img src ="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=200&h=200"/>
      <h1>
        Hello
      </h1>
      <h2> Welcome {username} </h2>

      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key = {id} username = {username} message = {message}/>
        ))
      }
      </FlipMove>

      <form className = "app__form">
      <FormControl className= "app__formControl">
          <TextField className = "app__input" placeholder="Enter a message" id = "filled-full-width" style={{ margin: 8 }} InputLabelProps={{ shrink: true,}} margin="normal" value = {input} onChange = {event => setInput(event.target.value)} />
            <IconButton className = "app__iconButton" disabled = {!input} variant="contained" color="primary" type = 'submit' onClick = {sendMessage} >
                <SendIcon />
            </IconButton>
        </FormControl>
      
      </form>
    
    </div>
  );
}

export default App;
