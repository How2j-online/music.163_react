const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('artist_data.txt', 'utf8');
const $ = cheerio.load(html);

// 云音乐特色榜
let songFeature = [];
let songFeatureData = $('.n-minelst.n-minelst-2').children('ul')
songFeatureData.eq(0).children('li').each((index, element) => {
    let imgUrl = $(element).find('img').attr('src');
    let title = $(element).find('img').attr('alt');
    let message = $(element).find('.s-fc4').text();
    songFeature.push({
        title,
        imgUrl,
        message
    });
})

// 全球媒体榜
let globalMedia = [];
songFeatureData.eq(1).children('li').each((index, element) => {
    let imgUrl = $(element).find('img').attr('src');
    let title = $(element).find('img').attr('alt');
    let message = $(element).find('.s-fc4').text();
    globalMedia.push({
        title,
        imgUrl,
        message
    });
});

// 歌曲列表
let songList = [];
let songListImg = $('.g-wrap').find('.cover.u-cover.u-cover-rank').find('img').attr('src');
let updateTime = $('.user.f-cb').find('.sep.s-fc3').text();
let collectionCount = $('#toplist-fav').find('i').text();
let songShareCount = $('#toplist-share').find('i').text();
let songCommentCount = $('#comment-count').text();
let songListPlayCount = $('#play-count').text();
$('#song-list-pre-cache  tbody tr').each((index, element) => {
    let songName = $(element).find('b').attr('title');
    let songTime = $(element).find('.u-dur').text();
    let songAuthor = $(element).find('.text').attr('title');
    let songImg = $(element).find('td[class="rank"]').html();
    if (songImg) {
        songImg = $(songImg).find('img').attr('src');
        songList.push({
            songName,
            songTime,
            songAuthor,
            songImg
        });
    } else {
        songList.push({
            songName,
            songTime,
            songAuthor,
        });
    }
});
let songListData = {
    title: '飙升榜',
    songListImg,
    updateTime,
    collectionCount,
    songShareCount,
    songCommentCount,
    songList: {
        songListPlayCount,
        songList
    }
}

fs.writeFile('../db_json/artist.json', JSON.stringify({
    songFeature,
    globalMedia,
    songListData
}), {flag: 'a'}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('写入成功');
    }
})