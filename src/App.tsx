import { useEffect, useState } from 'react';
import { fetchFeed, sortFeedEntriesByNewestToOldest } from './lib';
import { ModeSwitch } from './ui/switch';
import { PostCard } from './ui/postCard'; // Assuming PostCard is the component to render each entry
import feeds from './feeds';
import SiteHeader from './ui/siteHeader';

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
    <div className="App h-full bg-black text-white pb-[3rem]">
      <ModeSwitch />
      <div className="container m-auto">
        <SiteHeader />
        <div className='flex m-auto items-center max-md:flex-col'>Showing articles from...
          <div className="checkbox-container mt-4">
            <label>
              <input type="checkbox" checked className='checkbox-siliconera' />
              Siliconera
            </label>
            <label>
              <input checked type="checkbox" className='checkbox-polygon' />
              Polygon
            </label>
          </div>
        </div>
        {/* Render PostCards here using sortedFeedEntries */}
        <div className='feed-entries-container mt-[2rem] border-dark-mode-red border-[1px] border-[solid] shadow-md divide-y divide-white divide-dashed animate-ping-once'>
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
          )) || <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};

export default App;
