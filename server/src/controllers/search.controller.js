import { API_BASEPATH } from '../config/constants';
import fetch from 'node-fetch';
import searchModel from '../models/search.model';

export default async ({ query: { q } }, res) => {
    if (!q) {
        res.status(404).json({});
    } else {
        const URL = `${API_BASEPATH}sites/MLA/search?q=${q}&limit=4`;

        const response = await fetch(URL);
        const data = await response.json();

        res.status(200).json(searchModel(data));
    }
}
