import { $ajax, $post, $get, $put, $del } from '../plugins/axios';
import md5 from 'md5'
export const createComment = (data) => {
    return $post('/comment', data);
}
export const delComment = (id,isChild) => {
    console.log(1);
    return $del(`/comments/${id}/${isChild}`);
}
export const upComment = (data) => {
    return $put(`/comments/${data._id}`, {
        authorId: data.authorId,
        authorName: data.authorName,
        ip:data.ip,
        url: data.url,
        text: data.text,
        MD5email: md5(data.email),
        email: data.email,
    });
}
export const getcomment = (data) => {
    return $get('/comment', data);
}

export const getComment = () => {
    return $get('/comments');
}
