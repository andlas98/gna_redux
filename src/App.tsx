import { useEffect, useState } from 'react';
import { fetchFeed, sortFeedEntriesByNewestToOldest } from './lib';
import { ModeSwitch } from './ui/switch';
import { PostCard } from './ui/postCard'; // Assuming PostCard is the component to render each entry
import feeds from './feeds';
import SiteHeader from './ui/siteHeader';

const App = () => {
  const [ sortedFeedEntries, setSortedFeedEntries ] = useState<{ [key: string]: any }[]>([]);
  const [ excludedArticleSources, setExcludedArticleSources ] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFeed(feeds);
      const sortedData = sortFeedEntriesByNewestToOldest([...data]);
      setSortedFeedEntries(sortedData);
    };
    fetchData();
  }, [excludedArticleSources]);

  const handleArticleFilter = (articleSource: string, checked: boolean) => {
    const conditionToRemoveArticlesOfSpecificSource = !checked && (!excludedArticleSources.includes(articleSource))
    const conditionToAddArticlesOfSpecificSource = checked && (excludedArticleSources.includes(articleSource))

    if (conditionToRemoveArticlesOfSpecificSource) setExcludedArticleSources([...excludedArticleSources, articleSource]);
    if (conditionToAddArticlesOfSpecificSource) setExcludedArticleSources(excludedArticleSources.filter(source => source !== articleSource)); 
    return;
  };

  return (
    <div className="App h-full bg-black text-white pb-[3rem]">
      <ModeSwitch />
      <div className="container m-auto">
        <SiteHeader />
        <div className='flex m-auto items-center max-md:flex-col'> Showing articles from...
          <div className="checkbox-container mt-4">
            {Object.keys(feeds).map((entry, index) => (
              <label>
                <input type="checkbox" key={index} defaultChecked onClick={(e) => handleArticleFilter(entry, (e.target as HTMLInputElement).checked)} className={`checkbox-${entry}`} />
                {entry}
              </label>
            ))}
          </div>
        </div>
        {/* Render PostCards here using sortedFeedEntries */}
        <div className='feed-entries-container mt-[2rem] border-dark-mode-red border-[1px] border-[solid] shadow-md divide-y divide-white divide-dashed animate-ping-once'>
          {sortedFeedEntries.map((entry, index) => (
            entry.articleSource && !excludedArticleSources.includes(entry.articleSource) &&
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
              articlePreview={entry.articlePreview}
              entry={entry} 
            />
          )) || <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};

export default App;
