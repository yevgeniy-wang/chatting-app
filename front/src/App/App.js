import {Login} from "../Login/Login";
import {Chat} from "../Chat/Chat"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../utils/reduceStore";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
