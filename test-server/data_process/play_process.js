const fs = require("fs");
const $ = require('./util').get_$('play_list.txt');

// 全部分类
let classification = [];
$('.bd-classification').children('dl').each((index, element) => {
    let classificationName = $(element).find('dt').text();
    let classificationGroup = [];
    $(element).find('dd > a').each((index, element) => {
        classificationGroup.push($(element).text())
    })
    classification.push({
        classificationName,
        classificationGroup
    })
});

// 歌单
let playList = [];
$('#m-pl-container').children('li').each((index, element) => {
    let songImage = $(element).children().eq(0).find('img').attr('src');
    let songPlayCount = $(element).children().eq(0).find('span[class="nb"]').text();
    let songName = $(element).find('.dec a').attr('title');
    let songAuthor = $(element).find('.nm.nm-icn.f-thide.s-fc3').text();
    let songAuthorIcon = $(element).children().eq(2).find('img').attr('src');
    playList.push({
        songName,
        songAuthor,
        songAuthorIcon,
        songImage,
        songPlayCount
    });
});
fs.writeFile('../db_json/play_list.json', JSON.stringify({
    classification,
    playList
}), {flag: 'a'}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('写入成功');
    }
})

