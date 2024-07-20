"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contact_1 = require("../controllers/contact");
exports.default = (router) => {
    router.post('/identify', contact_1.getContactApi);
};
