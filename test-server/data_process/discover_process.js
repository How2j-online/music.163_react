const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('discover_data.txt', 'utf8');
const $ = cheerio.load(html);

// 热门推荐
const discoverData = [];
$('.n-rcmd').toggleClass('m-cvrlst f-cb').find('li').each((index, element) => {
    // 标题
    let title = $(element).find('.dec > a').attr('title');
    // 图片链接
    let imageUrl = $(element).find('.u-cover > img').attr('src');
    // 播放量
    let playCount = $(element).find('.nb').text();
    discoverData.push({
        title,
        imageUrl,
        playCount
    });
})

// 新碟上架
let newAlbumData = [];
let dataContent = $('.n-new > .n-disk').find('div[class="roll f-pr"]').children('ul');
$(dataContent).each((index, element) => {
    let listGroup = [];
    if (index <= 1) {
        $(element).find('li').each((index, element) => {
            let author = $(element).find('p[class="tit f-thide"]').attr('title');
            let albumName = $(element).find('.f-thide > a').attr('title');
            let imageUrl = $(element).find('.j-img').attr('src');
            listGroup.push({
                author,
                albumName,
                imageUrl
            });
        });
        newAlbumData.push(listGroup);
    }
});

// 榜单
let rankData = [];
$('.n-bill > .n-bilst').children('dl').each((index, element) => {
    let rankGroup = [];
    let rankTitleImage = $(element).find('dt > .cver > img').attr('src');
    let rankTitle = $(element).find('dt .cver > a').attr('title');
    $(element).find('dd > ol > li').each((index, element) => {
        let songName = $(element).find('a').attr('title');
        let songHref =$(element).find('a').attr('href');
        rankGroup.push({
            songName,
            songHref
        });
    })
    rankData.push({
        rankTitle,
        rankTitleImage,
        rankGroup
    });
})

fs.writeFile('../db_json/discover.json', JSON.stringify({
    discoverData,
    newAlbumData,
    rankData
}), {flag: 'a'}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('写入成功');
    }
})