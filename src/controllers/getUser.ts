import { UserModel } from "../models";
import { Request, Response } from 'express';
export async function getUserController(req:Request,res:Response) {
    console.log("Buscando usuário");
    try{
        res.status(200).json({user:await UserModel.findOne({id: req.params.id})});
    }
    catch(e){
        console.log(e);
    }
}