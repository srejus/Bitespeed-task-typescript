import express from 'express';

import contact from './contact';

const router = express.Router();

export default (): express.Router => {
    contact(router);

    return router;
}