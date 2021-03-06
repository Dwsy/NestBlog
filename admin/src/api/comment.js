import { $ajax, $post, $get, $put, $del } from '../plugins/axios';

export const recently = () => {
    return $get('/comments/recently')
  }
  