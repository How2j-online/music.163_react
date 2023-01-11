import { Redirect } from 'react-router-dom'
import React from 'react'

import HWDiscover from '@/views/discover';
import HwRecommend from '@/views/discover/children-views/recommend';
import HwTopList from '@/views/discover/children-views/top-list';
import HwArtist from '@/views/discover/children-views/artist';
import HwDjRadio from '@/views/discover/children-views/djradio';
import HwAlbum from '@/views/discover/children-views/album';
import HwPlayList from '@/views/discover/children-views/playlist';
import HwPlayer from '@/views/player';

import HwFriend from '@/views/friend';
import HwMine from '@/views/mine';

const routes = [
    // {
    //     path: '/',
    //     exact: true,
    //     component: HWDiscover
    // },
    {
      path: '/',
      exact: true,
      render: () => <Redirect to="/discover" />
    },
    {
        path: '/discover',
        component: HWDiscover,
        routes: [
            // {
            //     path: '/discover',
            //     exact: true,
            //     component: HwRecommend
            // },
            {
                path: '/discover',
                exact: true,
                render: () => <Redirect to="/discover/recommend" />
            },
            {
                path: '/discover/recommend',  // 推荐
                component: HwRecommend
            },
            {
                path: '/discover/toplist',  // 排行榜
                component: HwTopList
            },
            {
                path: '/discover/playlist', // 歌单
                component: HwPlayList
            },
            {
                path: '/discover/artist',  // 歌手
                component: HwArtist
            },
            {
                path: '/discover/djradio',  // 主播电台
                component: HwDjRadio
            },
            {
                path: '/discover/album',  // 新碟上架
                component: HwAlbum
            },
            {
                path: '/discover/player',  // 播放器
                component: HwPlayer
            }
        ]
    },
    {
        path: '/friend',
        component: HwFriend
    },
    {
        path: '/mine',
        component: HwMine
    }
];

export default routes;