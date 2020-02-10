import express from 'express';
import { PORT } from './config/constants';

import searchController from './controllers/search.controller';
import itemController from './controllers/item.controller';

const app = express();

// ROUTES
app.get('/api/items', searchController);
app.get('/api/items/:id', itemController);

app.listen(PORT, () => {
    console.log(`Listen on port: ${PORT}`);
});
