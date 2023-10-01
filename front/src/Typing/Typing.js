import {Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {socket} from "../utils/socket";
import {setTyping} from "../utils/actions";

export function Typing() { //component displays whether someone is typing or not
  const username = useSelector(state => state.username)
  const typing = useSelector(state => state.typing)
  const someone = typing.filter(item => item !== username)
  const [text, setText] = useState(`${someone.map(item => ` ${item}`)}`)
  const dispatch = useDispatch()

  useEffect(() => { //getting info from server about who is typing
    socket.on('messageTyping', data => {
      dispatch(setTyping(data))
    })
  }, [dispatch])
  return (
    <Typography
      display={someone.length ? 'block' : 'none'}
      variant='subtitle2'
      gutterBottom
    >
      {text} typing ...
    </Typography>
  )
}