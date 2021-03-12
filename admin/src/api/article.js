import { $ajax, $post, $get, $put, $del } from '../plugins/axios';

export const getFields = () => {
    return $get('/fields', {
        params: {
            query: {
                limit: 777,
                sort: "-_id",
                populate: 'tag classification'
            }
        }
    });
}
export const getDraft = () => {
    return $get('/fields/draft', {
        params: {
            query: {
                limit: 777,
                sort: "-_id",
                populate: 'tag classification'
            }
        }
    });
}

export const getFieldsById = (id) => {
    let Fields = $get(`/fields/${id}`, {
        params: {
            query: {
                populate: 'tag classification contentsId'
            }
        }
    });
    return Fields

}

export const createContent = (data) => {
    let contentId = $post('/contents', {
        text: data.text,
    });
    return contentId

}
export const createField = (data) => {
    let Fields = $post('/fields', data);
    return Fields
}

export const addField = (data) => {
    let add = $put(`/contents/${data.ContentTd}`, {
        fieldsId: data.fieldsId,
    });
    return add
}

export const delField = (id) => {
    let del = $del(`/fields/${id}`);
    return del
}

export const delContent = (id) => {
    let del = $del(`/contents/${id}`);
    return del
}

export const updataField = (id,data) => {
    let up = $put(`/fields/${id}`,data);
    return up
}

export const updataContent = (id,data) => {
    let up = $put(`/contents/${id}`,data);
    return up
}

    // let fields = $post('fields',{
    //     contentsId:contentId[0]._id,
    //     title:data.title,
    //     cover:data.cover,
    //     coverSmall:data.coverSmall,
    //     tag:data.tag,
    //     classification:data.classification,
    //     commentsNum:0
    // })

    // return $post('/comment', data);