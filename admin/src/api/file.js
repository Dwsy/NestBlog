import { $ajax, $post, $get, $put, $del } from '../plugins/axios';
export const createFile = (data) => {
    return $post('/file', data);
}
export const delfFle = (data) => {
    return $del('/file', data);
}
export const upFile = (data) => {
    return $put('/file', data);
}
export const getFile = (data) => {
    return $get('/file', data);
}
