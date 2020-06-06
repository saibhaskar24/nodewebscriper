const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.newelectronics.co.uk/electronics-news/';

axios.get(url).then(response =>{
  // console.log(response.data);
  const $ = cheerio.load(response.data);
  const urlElems = $('div.newsItem')
  // console.log(urlElems.text());
  for (let i = 0; i < urlElems.length /2; i++) {
    const title = $(urlElems[i]).find('h2').text();
    const dataurl = $(urlElems[i]).find('a').attr('href');
    const content = $(urlElems[i]).find('span').text();    
    console.log("Tile",title);
    console.log("Content",content);
    console.log("Link",dataurl);
  }

}).catch(error => {
  console.log(error);
})


