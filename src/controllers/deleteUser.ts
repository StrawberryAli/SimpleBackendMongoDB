import { UserModel } from "../models";
import { Request, Response } from 'express';
export async function deleteUserController(req:Request,res:Response) {
    console.log("Tentando deletar usuário")
    try{
        const result = await UserModel?.deleteOne();
        console.log("Usuario removido");
        res.status(201).json(result);
    }
    catch(e){
        console.log(e);
    }
}