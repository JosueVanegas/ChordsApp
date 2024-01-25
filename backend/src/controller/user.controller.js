import User from '../model/user.model.js'
import cp from 'crypto-js'
import {ENCRIPT_KEY} from '../config.js'
export const getUser = async(req,res)=>{
    try{
         const query = await User.find().select('-password')
         if(query.length==0) return res.status(400).json("not finded");
         if(!query) return res.status(500).json({"server error":"query failed"});
         res.status(200).json(query)
    }catch(err){
        return res.json(JSON.stringify(err));
    }
}
export const getOneUser = async(req,res)=>{
    try{
        const id = req.params.id;
        if(!id)return res.status(400).json({"invalid request":"you need to insert the id"});
        const query = await User.findById(id,'name email');
        if(query.length==0) return res.status(400).json({"not finded":"the object with the id does't exists"});
        return res.status(200).json(query)
    }catch(err){
        return res.status(500).json(JSON.stringify(err));
    }
}

export const deleteUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const result=await User.findByIdAndDelete(id);
        if(!result)return res.status(400).json({"query error":"query to delete has failed"});
        return res.status(200).json({"deleted":"the user has deleted"});
    }catch(err){
        return res.status(500).json(JSON.stringify(err));
    }
}
export const putUser = async(req,res)=>{
    try{
        const id = req.params.id;
        if(!id)return res.status(400).json({"invalid request":"you need to insert the id"});
        req.body.password = await cp.AES.encrypt(req.body.password,ENCRIPT_KEY).toString();
       const query = await User.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true});
        if(!query)return res.status(400).json({"update error":""});
        return res.status(200).json({"result":"updated succesfuly",query});
        
    }catch(err){
        return res.status(500).json(JSON.stringify(err));
    }
}