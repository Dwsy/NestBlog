import { $ajax, $post, $get, $put, $del } from '../plugins/axios';

export const getTheme = () => {
    return $get('/theme', {
        params: {
            query: {
                limit: 777,
                sort: "-_id",
            }
        }
    });
}

export const createTheme = (data) => {
    return $post('/theme', data);
}
export const delTheme = (id) => {
    return $del(`/theme/${id}`);
}
export const upTheme = (data) => {
    return $put(`/theme/${data._id}`, data);
}


