import request from "superagent";

const URL = 'https://secret-lake-84406.herokuapp.com';

export async function getStickers() {
    const response = await request.get(`${URL}/stickers`);
    return response.body;
}

export async function getCategories() {
    const response = await request.get(`${URL}/categories`);
    return response.body;
}

export async function getSticker(id){
    const response = await request.get(`${URL}/stickers/${id}`);
    
    return response.body[0];
}

export async function createSticker(newSticker){
    const { body } = await request.post(`${URL}/stickers`)
    .send(newSticker);
    return body;
}

export async function deleteSticker(id){
    const { body } = await request.delete(`${URL}/stickers/${id}`);
    return body;
}

export async function updateSticker(id, changesToSticker){
    const {body} = await request.update(`${URL}/stickers/${id}`)
    .send(changesToSticker);
    return body;
}

export const getCategoryId = (sticker, categories) => categories.find(category => sticker.category === category.name).id;
