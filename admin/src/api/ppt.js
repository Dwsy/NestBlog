import { $ajax, $post, $get, $put, $del } from '../plugins/axios';

export const getPpt = () => {
    return $get('/ppt',{
        params: {
            query: {
                limit: 777,
                sort: "-_id",
            }
        }
    });
}

export const createPpt = (data) => {
    return $post('/Ppt', data);
}
export const delPpt = (id) => {
    return $del(`/ppt/${id}`);
}
export const upPpt = (data) => {
    return $put(`/Ppt/${data._id}`, data);
}
