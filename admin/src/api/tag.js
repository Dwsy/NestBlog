import { $ajax, $post, $get, $put, $del } from '../plugins/axios';
export const createTag = (data) => {
    return $post('/tag', data);
}
export const delTag = (data) => {
    return $del('/tag', data);
}
export const upTag = (data) => {
    return $put('/tag', data);
}
export const getTag = () => {
    return $get('/tag', {
        params: {
            query: {
                limit: 777,
                sort: "-contentsNum"
            }
        }
    });
}
