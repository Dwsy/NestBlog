import { $ajax, $post, $get, $put, $del } from '../plugins/axios';
export const createTag = (data) => {
    return $post('/tag', data);
}
export const delTag = (id) => {
    return $del(`/tag/${id}`);
}
export const upTag = (data) => {
    return $put(`/tag/${data._id}`,data);
}
export const getTag = () => {
    return $get('/tag', {
        params: {
            query: {
                limit: 777,
                sort: "-_id"
            }
        }
    });
}
