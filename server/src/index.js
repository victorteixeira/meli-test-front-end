import express from 'express';
import { PORT } from './config/constants';

import searchController from './controllers/search.controller';
import itemController from './controllers/item.controller';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// ROUTES
app.get('/api/items', searchController);
app.get('/api/items/:id', itemController);

app.listen(PORT, () => {
    console.log(`Listen on port: ${PORT}`);
});
