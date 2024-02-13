import { UserModel } from "../models";
import { Request, Response } from 'express';
export async function updateUserController(req:Request,res:Response) {
    console.log("Tentando criar usuário")
    try{
        const result = await UserModel.updateOne({id:req.params.id},req.body);
        console.log("Usuario atualizado");
        res.status(200).json(result);
    }
    catch(e){
        console.log(e);
    }
}