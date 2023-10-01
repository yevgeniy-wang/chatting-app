import './Chat.scss'
import {Container} from "@mui/material";
import {MessageBox} from "../MessageBox/MessageBox";
import {InputBox} from "../InputBox/InputBox";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {socket} from "../utils/socket";
import {addMessages} from "../utils/actions";
import {Typing} from "../Typing/Typing";

export function Chat() { //chat page component
  const messages = useSelector(state => state.messages)
  const dispatch = useDispatch()

  useEffect(() => { //getting new messages from the server
    socket.on('addMessage', data => dispatch(addMessages(data)))
  }, [dispatch])

  return (
    <Container className='chat'>
      <MessageBox messageArray={messages}/>
      <Typing/>
      <InputBox/>
    </Container>
  )
}