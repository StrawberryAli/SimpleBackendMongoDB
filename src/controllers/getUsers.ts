import { UserModel } from "../models";
import { Request, Response } from 'express';
export async function getUsersController(req:Request,res:Response) {
    try{
        res.status(200).send({users: await UserModel.find()});
    }
    catch(e){
        console.log(e);
    }
}