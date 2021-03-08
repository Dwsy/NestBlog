import { $ajax, $post, $get, $put, $del } from '../plugins/axios';
export const createLink = (data) => {
    return $post('/links', data);
}
export const delLink = (id) => {
    return $del(`/links/${id}`);
}
export const upLink = (data) => {
    return $put(`/links/${data._id}`, data);
}
export const getLinks = () => {
    return $get('/links',{
        params: {
            query: {
                limit: 777,
                sort: "-_id",
            }
        }
    });
}
