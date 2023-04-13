import logo from './logo.svg';
import './App.css';
import Comp1 from './Comp1';
import Key_list from './key_List';
import Form1 from './components/form_ex';
import Form2 from './components/form_ex2';
import Animeex from './components/anime_ex';
import Message_inp from './components/message_inp';
import './index.css'

import Editor from './components/Code_Editor';
import LiveEditor from './components/Live_Editor';
import QuestionsHome from './components/Questions_home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddQuestion from './components/Add_Question';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path="/problems" element={<QuestionsHome/>}></Route>
          <Route path="/question/:id" element={<LiveEditor/>}></Route>
          {/* <LiveEditor/> */}
          {/* <Message_inp/> */}
          {/* <Animeex/> */}
          {/* <Form2/> */}
          {/* <Form1/> */}
          {/* <Key_list/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
