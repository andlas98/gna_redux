import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PostCard } from './components/postCard';
import { ModeSwitch } from './components/switch';

function App() {
  return (
    <div className="App">
      <ModeSwitch />
      <div className="container">
      <hr className="header-upper-hr dark:border-dark-mode-red w-[85%]"></hr>
      <b>
        <h2 className="header" id="header"><span className="accented-header-letter">G</span>aming <span
          className="accented-header-letter">N</span>ews <span className="accented-header-letter">A</span>ggregator</h2>
      </b>
      <hr className="header-lower-hr"></hr>
    </div>
      <PostCard className="card" content={<>Hello</>} />
    </div>
  );
}

export default App;
