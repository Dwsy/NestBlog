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
    return $get('/fields/draftList', {
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
    console.log('createContent');
    let contentId = $post('/contents/create', {
        text: data.text,
        mdText: data.mdText,
        isPublish: data.isPublish,
        allowComment: data.allowComment
    });
    return contentId

}

export const createField = (data) => {
    let Fields = $post('/fields', data);
    return Fields
}

export const addField = (data) => {
    $put(`/contents/put/${data.ContentId}`, {
        fieldsId: data.fieldsId,
    });
}

export const createdToc = (id) => {
    let createdToc = $put(`/contents/created_toc/${id}`);
    return createdToc
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
    let up = $put(`/contents/put/${id}`,data);
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