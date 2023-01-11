import request from "@/services/request";

export function getToBanner() {
    return request({
        url: "/recommend/banner",
    });
}

export function getToHotRecommends() {
    return request({
        url: "/recommend/hot",
    });
}

export function getToNewAlbums() {
    return request({
        url: "/recommend/newAlbum",
    });
}