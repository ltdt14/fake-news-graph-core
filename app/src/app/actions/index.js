import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";

export function fetchPosts(page){
    let request = page !== null?axios.get("http://localhost:3600/posts?page=" + page):request = axios.get("http://localhost:3600/posts");

    return{
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPost(id){
    const request = axios.get("/posts/" + id);

    return{
        type: FETCH_POST,
        payload: request
    }
}