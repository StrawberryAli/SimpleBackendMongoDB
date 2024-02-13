import { UserModel } from "../models";
import { Request, Response } from 'express';
export async function createUserController(req:Request,res:Response) {
    console.log("Tentando criar usuário")
    try{
        const newUser = new UserModel(req.body);
        const result = await newUser.save();
        console.log("Usuario criado");
        res.status(201).json(result);
    }
    catch(e){
        console.log(e);
    }
}