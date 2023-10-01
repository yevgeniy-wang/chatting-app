import './Message.scss'
import {Avatar, Box, Typography} from "@mui/material";
import {useSelector} from "react-redux";

export function Message(messageObj) { //message component
  const username = useSelector(state => state.username)

  return (
    <Box className={`message-box__message message ${username === messageObj.username && 'message--my-message'}`}>
      <Avatar>{messageObj.username.substring(0, 1)}</Avatar>
      <Box className='message__container'>
        <Typography className='message__login' variant='body2'>{messageObj.username}< /Typography>
        <Typography className='message__text' variant='body1'>{messageObj.text}< /Typography>
      </Box>
    </Box>
  )
}