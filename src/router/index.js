import { Redirect } from 'react-router-dom'
import React from 'react'

const HWDiscover = React.lazy(() => import('@/views/discover'))
const HwRecommend = React.lazy(() => import('@/views/discover/children-views/recommend'));
const HwTopList = React.lazy(() => import('@/views/discover/children-views/top-list'));
const HwArtist = React.lazy(() => import('@/views/discover/children-views/artist'));
const HwDjRadio = React.lazy(() => import('@/views/discover/children-views/djradio'));
const HwAlbum = React.lazy(() => import('@/views/discover/children-views/album'));
const HwPlayList = React.lazy(() => import('@/views/discover/children-views/playlist'));
const HwPlayer = React.lazy(() => import('@/views/player'));

const HwFriend = React.lazy(() => import('@/views/friend'));
const HwMine = React.lazy(() => import('@/views/mine'));

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