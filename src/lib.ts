import feeds from "./feeds";

var parseString = require('xml2js').parseString;

export var allFeedEntries : Array <{[key: string]: any}> = [];

const PROXY_URL = 'https://cors.eu.org/';

function removeObjectKeys(obj: { [key: string]: any }, keysToRemove: string[]): { [key: string]: any } {
  keysToRemove.forEach(key => {
    if (obj.hasOwnProperty(key)) {
      delete obj[key];
    }
  });
  return obj;
}

export const fetchFeed =( RSS_SOURCE: String, RSS_URL: String )=>{
  fetch(`${PROXY_URL}${RSS_URL}`)
    .then((response) => response.text()
      .then((data) => parseString(data, (err: any, res:any) => {
        var formattedEntry = {
          articleHeaderImg: "",
          articleHeadline: "",
          articleLink: "",
          articleAuthor: "", 
          articleSource: "",
          articlePublishDate: "",
          articleTags: "",
        }
        
        if (RSS_SOURCE === "Siliconera") {
          const siliconeraEntries = res.rss.channel[0].item;
          console.log("Siliconera Entries:", siliconeraEntries);
          Object.entries(siliconeraEntries).forEach((entry:Array<any>) => {
            formattedEntry.articleHeadline = entry[1].title[0];
            formattedEntry.articleHeaderImg = "";
            formattedEntry.articleLink = entry[1].link[0];
            formattedEntry.articleAuthor = entry[1]["dc:creator"][0];
            formattedEntry.articleSource = "Siliconera";
            formattedEntry.articlePublishDate = entry[1].pubDate[0];
            formattedEntry.articleTags = entry[1].category;
            allFeedEntries.push(formattedEntry);
          })
        }
        if (RSS_SOURCE === "Polygon"){
          const entries = res.feed.entry;
          console.log("Polygon Entries:", entries);
        }
        console.info("data:", res);
        console.warn("err:", err);
      })
  )
  .catch((error) => console.warn("response error", error))
  .finally(()=>
    {
      console.info("response complete")
      // return {key, }
    }));
}
