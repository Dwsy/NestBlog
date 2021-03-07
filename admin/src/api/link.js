import { $ajax, $post, $get, $put, $del } from '../plugins/axios';
export const createLink = (data) => {
    return $post('/link', data);
}
export const delLink = (data) => {
    return $del('/link', data);
}
export const upLink = (data) => {
    return $put('/link', data);
}
export const getLink = (data) => {
    return $get('/link', data);
}
