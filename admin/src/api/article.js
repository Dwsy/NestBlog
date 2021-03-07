import { $ajax, $post, $get, $put, $del } from '../plugins/axios';

export const getFields = () => {
    return $get('/fields', {
        params: {
            query: {
                limit: 777,
                sort: "-_id",
                populate:'tag classification'
            }
        }
    });
}
