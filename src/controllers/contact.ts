import express from 'express';

export const getContactApi = async(req:express.Request, res:express.Response) => {
    const data = req.body;
    if(!data.email && !data.phone) {
        return res.status(400).json({error:"'email' or 'phone' required"});
    }
    return res.status(200).json({message:"Data processed!"});
}