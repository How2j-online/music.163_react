import request from "@/services/request";

export function getToPlayer() {
    return request({
        url: "/song/getSong",
    })
}