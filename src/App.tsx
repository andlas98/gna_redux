import React, { useEffect, useState } from 'react';
import { fetchFeed, sortFeedEntriesByNewestToOldest, allFeedEntries } from './lib';
import { ModeSwitch } from './ui/switch';
import { PostCard } from './ui/postCard'; // Assuming PostCard is the component to render each entry
import feeds from './feeds';

const App = () => {
  const [sortedFeedEntries, setSortedFeedEntries] = useState<{ [key: string]: any }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFeed(feeds);
      const sortedData = sortFeedEntriesByNewestToOldest([...data]);
      setSortedFeedEntries(sortedData);
    };

    fetchData();
  }, [feeds]);

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
        {/* Render PostCards here using sortedFeedEntries */}
        {sortedFeedEntries.map((entry, index) => (
          <PostCard 
            key={index} 
            className={entry.className}
            articleHeaderImg={entry.articleHeaderImg}
            articleHeadline={entry.articleHeadline}
            articleLink={entry.articleLink}
            articlePublishDate={entry.articlePublishDate}
            articleAuthor={entry.articleAuthor}
            articleSource={entry.articleSource}
            articleTags={entry.articleTags}
            entry={entry} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;
