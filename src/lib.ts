const RSS_URL = 'https://www.polygon.com/rss/index.xml';
const PROXY_URL = 'https://cors.eu.org/';
export const fetchFeed =()=>{
    fetch(`${PROXY_URL}${RSS_URL}`)
      .then((response) => response.text()
        .then((data)=> console.info("data", data))
        .catch((error)=> console.warn("data error", error))
        .finally(()=> console.info("data complete"))
    ).catch((error) => console.warn("response error", error))
    .finally(()=> console.info("response complete"));
}
