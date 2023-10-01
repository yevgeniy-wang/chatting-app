import {Container, Typography, TextField, Button} from "@mui/material";
import './Login.scss'
import {useSelector, useDispatch} from "react-redux";
import {addUser, setError} from "../utils/actions";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {socket} from "../utils/socket";


export function Login() { //login page component
  const username = useSelector(state => state.username)
  const error = useSelector(state => state.error)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleClick() { // sends username to a server and enters the chat page
    if (!error) {
      socket.emit('addUser', username)
      navigate('/chat')
    }
  }

  useEffect(() => { //disable or enable send btn
    dispatch(setError(username < 1))
  }, [dispatch, username]);

  return (
    <Container className='login'>
      <Typography variant='h4'>
        Please enter your login to start chatting
      </Typography>
      <TextField
        onChange={evt => dispatch(addUser(evt.target.value))}
        required
        id="outlined-required"
        label="Required"
        placeholder="Your login"
      />
      <Button variant="contained" disabled={error} onClick={handleClick}>Continue</Button>
    </Container>
  )
}