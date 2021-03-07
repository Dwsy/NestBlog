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
