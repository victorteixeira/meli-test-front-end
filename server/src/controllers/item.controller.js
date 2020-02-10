import { API_BASEPATH } from '../config/constants';
import fetch from 'node-fetch';
import itemModel from '../models/item.model';

const getDescription = async (id) => {
    if (!id) return;

    const URL = `${API_BASEPATH}items/${id}/description`;

    const response = await fetch(URL);
    const data = await response.json();

    return data.plain_text;
}

export default async ({ params: { id } }, res) => {

    if (!id) {
        res.status(404).json({});
    } else {
        const URL = `${API_BASEPATH}items/${id}`;

        const response = await fetch(URL);
        const data = await response.json();

        if (data.id) {
            data.description = await getDescription(id);

            res.status(200).json(itemModel(data));
        } else {
            res.status(data.status).json(data);
        }


    }
}
