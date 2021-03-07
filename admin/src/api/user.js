import { $ajax, $post, $get, $put, $del } from '../plugins/axios';
export const getUsers = () => {
    return $get('/users');
}
export const delUsers = () => {
    return $del('/users', data);
}
