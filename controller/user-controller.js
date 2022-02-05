const User = require('../models/UserSchema.js');

// export const getUsers = (req,res)=>{
    const getUsers = async(req,res)=>{
        try{
            const allUsers = await User.find();
            res.json(allUsers);
        }catch(error){
            res.json({message: error.message});
        }
    }

    const addUsers = async(req,res)=>{
        console.log(req);
        const user = req.body;
        console.log(user);
        const newUser = new User(user);

        try{
            await newUser.save();
            res.json(newUser);
        }catch(error){
            res.json({ message: error.message});
        }
    }

    const getUserById = async(req,res)=>{
        const id = req.params.id;
        try{
            const useId = await User.findById(id);
            res.json(useId);
        }catch(err){
            res.json({message: error.message});
        }
    }

    const editUser = async(req,res)=>{
        const edituse = req.body;
        const newUser = new User(edituse);
        try{
            await User.updateOne({_id:req.params.id}, newUser); 
            res.json(newUser);
        }catch(err){
            res.json({message: error.message});
        }
    }

    const deleteUser = async(req,res)=>{
        const id = req.params.id;
        try{
            delUser = await User.deleteOne({_id:id});
            res.json('User deleted successfully');
        }catch(err){
            res.json({message: err.message});
        }
    }

    module.exports = {getUsers,addUsers,getUserById,editUser,deleteUser};