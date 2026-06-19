import { useEffect, useState } from 'react';
import { fetchFeed, sortFeedEntriesByNewestToOldest } from './lib';
import PostCard from './ui/postCard'; // Assuming PostCard is the component to render each entry
import feeds from './feeds';
import SiteHeader from './ui/siteHeader';
import { Link } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import SiteFooter from './ui/siteFooter';

const App = () => {
  const [ sortedFeedEntries, setSortedFeedEntries ] = useState<{ [key: string]: any }[]>([]);
  const [ excludedArticleSources, setExcludedArticleSources ] = useState<string[]>([]);
  const [ isFeedLoaded, setIsFeedLoaded ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFeed(feeds);
      const sortedData = sortFeedEntriesByNewestToOldest([...data]);
      setSortedFeedEntries(sortedData);
      setIsFeedLoaded(true);
    };
    fetchData();
  }, [excludedArticleSources]);

  const handleArticleFilter = (articleSource: string, checked: boolean) => {
    const conditionToRemoveArticlesOfSpecificSource = !checked && (!excludedArticleSources.includes(articleSource))
    const conditionToAddArticlesOfSpecificSource = checked && (excludedArticleSources.includes(articleSource))

    if (conditionToRemoveArticlesOfSpecificSource) setExcludedArticleSources([...excludedArticleSources, articleSource]);
    if (conditionToAddArticlesOfSpecificSource) setExcludedArticleSources(excludedArticleSources.filter(source => source !== articleSource)); 
  };

  const isSourceActive = (source: string) => !excludedArticleSources.includes(source);
  const totalSources = Object.keys(feeds).length;
  const activeSources = totalSources - excludedArticleSources.length;

  return (
    <div className="App min-h-screen bg-almost-black text-white flex flex-col">
      {/* Header with GitHub Link */}
      <div className='flex justify-between items-center px-6 py-4 border-b border-dark-mode-red/30'>
        <div className="flex-1" />
        <Link 
          target="_blank" 
          href="https://github.com/andlas98/gna_redux"
          className="text-white hover:text-dark-mode-red-text transition-colors duration-200"
          sx={{ textDecoration: 'none', '&:hover': { opacity: 0.8 } }}
        >
          <GitHub className="w-6 h-6" />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 container max-w-7xl mx-auto w-full px-4">
        <SiteHeader />
        
        {/* Filter Section */}
        <div className="mt-8 mb-8">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-light-gray text-sm font-medium tracking-wide">
              Showing {activeSources} of {totalSources} sources
            </span>
            <div className="w-px h-5 bg-dark-mode-red/20" />
          </div>
          
          <div className="flex justify-center flex-wrap gap-2 mt-5">
            {Object.keys(feeds).map((entry, index) => {
              const isActive = isSourceActive(entry);
              return (
                <button
                  key={index}
                  onClick={(e) => {
                    const newChecked = !isActive;
                    handleArticleFilter(entry, newChecked);
                  }}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                    ${isActive 
                      ? 'bg-dark-mode-red text-white border-dark-mode-red shadow-lg shadow-dark-mode-red/30 hover:shadow-dark-mode-red/50' 
                      : 'bg-dark-gray text-light-gray border-dark-gray hover:border-dark-mode-red/50 hover:text-light-gray/70'
                    }
                  `}
                >
                  {entry}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feed Content */}
        {isFeedLoaded && activeSources === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-5xl mb-4 text-dark-mode-red/50">✦</div>
            <p className="text-light-gray text-lg">No articles to show</p>
            <p className="text-light-gray/50 text-sm mt-2">Select at least one source to see articles</p>
          </div>
        ) : !isFeedLoaded ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-ping w-3 h-3 bg-dark-mode-red rounded-full mb-4"></div>
            <p className="text-light-gray">Loading articles...</p>
          </div>
        ) : (
          <div className={`space-y-0 border border-dark-mode-red/30 rounded-lg overflow-hidden bg-dark-gray/40 backdrop-blur-sm shadow-xl transition-opacity duration-300 ${isFeedLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            {sortedFeedEntries.map((entry, index) => (
              entry.articleSource && !excludedArticleSources.includes(entry.articleSource) && (
                <div key={index} className={index > 0 ? 'border-t border-dark-mode-red/20' : ''}>
                  <PostCard 
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
                </div>
              )
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
};

export default App;
