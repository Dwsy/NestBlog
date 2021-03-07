import { $ajax, $post, $get, $put, $del } from '../plugins/axios';
export const createcomment = (data) => {
    return $post('/comment', data);
}
export const delcomment = (data) => {
    return $del('/comment', data);
}
export const upcomment = (data) => {
    return $put('/comment', data);
}
export const getcomment = (data) => {
    return $get('/comment', data);
}

export const getComment = () => {
    return $get('/comments');
}
