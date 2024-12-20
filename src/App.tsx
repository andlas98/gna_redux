import React from 'react';

import logo from './logo.svg';
import './App.css';
import { PostCard } from './ui/postCard';
import { ModeSwitch } from './ui/switch';
import { fetchFeed } from './lib';
import { useEffect } from 'react';
import feeds from './feeds';
import { allFeedEntries } from './lib';

function App() {
  useEffect(() => {
    Object.entries(feeds).forEach(feed => {
      fetchFeed(feed[0], feed[1]);
    });
    console.log("AllFeedEntries:", allFeedEntries);
    // debugger;
  }, [])
  
  return (
    <div className="App h-full">
      <ModeSwitch />
      <div className="container">
      <hr className="header-upper-hr dark:border-dark-mode-red w-[85%]"></hr>
      <b>
        <h2 className="header" id="header"><span className="accented-header-letter">G</span>aming <span
          className="accented-header-letter">N</span>ews <span className="accented-header-letter">A</span>ggregator</h2>
      </b>
      <hr className="header-lower-hr"></hr>
    </div>
      <PostCard className="card" articleHeaderImg="https://cdn2.freedom.to/assets/logos/internal-topnav-logo-premium-15264d00a08c72db065312502000aa7c56f12daf0399f41169230001d8892c39.png" articleHeadline="Everything you spend on itch.io goes to devs on Nov. 29" articleLink="www.google.com" articleAuthor="John Doe" articleSource="Destructoid" articlePublishDate="Jun 11, 2002" articleTags={["Review", "Horror"]}/>
    </div>
  );
}

export default App;
