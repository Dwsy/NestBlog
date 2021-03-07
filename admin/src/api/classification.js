import { $ajax, $post, $get, $put, $del } from '../plugins/axios';
export const createClassification = (data) => {
    return $post('/classification', data);
}
export const delfClassification = (data) => {
    return $del('/classification', data);
}
export const upClassification = (data) => {
    return $put('/classification', data);
}
export const getClassification = () => {
    return $get('/classification', {
        params: {
            query: {
                limit: 777,
                sort: "rank",
            }
        }
    });
}
