import express from 'express';
import { getContactApi } from "../controllers/contact";

export default(router: express.Router) => {
    router.post('/identify',getContactApi);
}