import './MessageBox.scss'
import {Box} from "@mui/material";
import {Message} from "../Message/Message";


export function MessageBox({messageArray}) { //container with all messages
  const messageComponents = messageArray.map((message, id) => <Message key={id} {...message}/>)

  return (
    <Box className='chat__message-box message-box'>
      {messageComponents}
    </Box>
  )
}