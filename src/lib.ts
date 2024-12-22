var parseString = require('xml2js').parseString;
// var feeds = require('./feeds');

export var allFeedEntries : Array <{[key: string]: any}> = [];

const PROXY_URL = 'https://cors.eu.org/';

function moveSiliconeraEntriesToAllFeedEntries(entries: any) {
  entries.forEach((entry: any) => {
    const formattedEntry = {
      articleHeaderImg: "",
      articleHeadline: entry.title[0],
      articleLink: entry.link[0],
      articleAuthor: entry["dc:creator"][0],
      articleSource: "Siliconera",
      articlePublishDate: entry.pubDate[0],
      articleTags: entry.category,
    };
    allFeedEntries.push(formattedEntry);
  });
  // debugger;
}

function movePolygonEntriesToAllFeedEntries(entries: any) {
  entries.forEach((entry: any) => {
    const formattedEntry = {
      articleHeaderImg: "",
      articleHeadline: entry.title[0]._,
      articleLink: entry.link[0].$.href,
      articleAuthor: entry.author[0].name[0],
      articleSource: "Polygon",
      articlePublishDate: entry.published[0],
      // TODO: Get the tags from the entry correctly
      articleTags: [entry.category.forEach((categoryObj: any) =>{
        const term = categoryObj.$.term;
        return term;
      })],
    };
    allFeedEntries.push(formattedEntry);
  });
  // debugger;
}

export const fetchFeed = async (feeds: { [key: string]: string }) => {
  allFeedEntries.length = 0; // Clear previous entries

  const fetchPromises = Object.entries(feeds).map(async ([key, url]) => {
    try {
      const response = await fetch(`${PROXY_URL}${url}`);
      const data = await response.text();
      parseString(data, (err: any, res: any) => {
        if (err) {
          console.warn("Parsing error:", err);
          return;
        }
        if (key === "Siliconera") {
          const siliconeraEntries = res.rss.channel[0].item;
          moveSiliconeraEntriesToAllFeedEntries(siliconeraEntries);
        }
        if (key === "Polygon") {
          const polygonEntries = res.feed.entry;
          movePolygonEntriesToAllFeedEntries(polygonEntries);
        }
      });
    } catch (error) {
      console.warn("Fetch error:", error);
    }
  });

  await Promise.all(fetchPromises);
  return allFeedEntries;
};

export function sortFeedEntriesByNewestToOldest (allFeedEntries: Array<{[key: string]: any}>){
  allFeedEntries.sort((a, b) => {
    return new Date(b.articlePublishDate).getTime() - new Date(a.articlePublishDate).getTime();
  });
  return allFeedEntries;
}