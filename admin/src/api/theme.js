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
