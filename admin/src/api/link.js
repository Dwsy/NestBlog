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
