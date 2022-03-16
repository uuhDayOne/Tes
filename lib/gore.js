const axios = require("axios");
const cheerio = require("cheerio");

const randomgore = async() => {
	        return new Promise(async(resolve,reject) => {
	        	axios.get('https://seegore.com/gore/').then(dataa => {
	        		const $$$ = cheerio.load(dataa)
	        		pagina = $$$('#main > div.container.main-container.bb-stretched-full > div > div > div > div > div > div > nav > ul > li:nth-child(4) > a').text();	
	        	rand = Math.floor(Math.random() * pagina) + 1
	        	randvid = Math.floor(Math.random() * 16) + 1
	        	if(rand === 1){
	        		slink = 'https://seegore.com/gore/'
	        	}else{
	        		slink = `https://seegore.com/gore/page/${rand}/` 
	        	}
                axios.get(slink)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const link = [];
                        const result = [];
                        const username = [];
                        const linkp = $(`#post-items > li:nth-child(${randvid}) > article > div.post-thumbnail > a`).attr('href')
                        const thumbb = $(`#post-items > li:nth-child(${randvid}) > article > div.post-thumbnail > a > div > img`).attr('src')
                        axios.get(linkp)
						.then(({ data }) => {
							const $$ = cheerio.load(data)
							const format = {
								judul : $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > header > h1').text(),
								views : $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > span > span.count').text(),
								comment : $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > a > span.count').text(),
								thumb : thumbb,
								link : $$('video > source').attr('src')
							}
							const result = {
								creator: 'KiZakiXD',
								data : format
							}
                  resolve(result)
                })
			})
                .catch(reject)
            })
        })
}

module.exports = { randomgore };