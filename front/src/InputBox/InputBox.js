import '././InputBox.scss'
import {Box, Button, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useDispatch, useSelector} from "react-redux";
import {setMessage, setError, setFocus} from "../utils/actions";
import {socket} from "../utils/socket";
import {useEffect} from "react";

export function InputBox() { //message input component
  const username = useSelector(state => state.username)
  const error = useSelector(state => state.error)
  const message = useSelector(state => state.message)
  const focused = useSelector(state => state.focused)
  const dispatch = useDispatch()


  function handleClick() { //send message to a server
    if (!error) {
      socket.emit('addMessage', {username: username, text: message})
      dispatch(setMessage(''))
    }
  }

  useEffect(() => { //disable or enable send btn and handle focus effect
    dispatch(setError(message.length < 1))

    if (focused && message.length > 0) {
      socket.emit('setTyping', username)
    } else if (!focused || (focused && message.length === 0)) {
      socket.emit('unsetTyping', username)
    }
  }, [dispatch, focused, message, username])

  return (
    <Box className='chat__input-box input-box'>
      <TextField
        onChange={evt => dispatch(setMessage(evt.target.value))}
        onFocus={() => dispatch(setFocus(true))}
        onBlur={() => dispatch(setFocus(false))}
        value={message}
        fullWidth
        className='input-box__input'
        id="outlined-multiline-flexible"
        multiline
        maxRows={4}
        placeholder='Plese start typing your message'
      />
      <Button
        onClick={handleClick}
        className='input-box__send-btn'
        disabled={error} variant="contained"
        endIcon={<SendIcon/>}>Send
      </Button>
    </Box>
  )
}