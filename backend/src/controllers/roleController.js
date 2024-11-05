const Role = require("../models/role")

exports.createRole = async(req,res)=>{
    const {name,category,permissions} = req.body;
    try{
        const newRole = await Role.create({name,category,permissions})
        res.status(200).json({
            success:true,
            data:newRole
        })
    }catch(err){    
        res.status(500).json({
            success:false,
            message:"Error creating role",
            error:err
        })
    }
}
exports.updateRole = async (req, res) => {
    const { role_id, name, category, permissionsToAdd, permissionsToRemove } = req.body;
    console.log(req.body);

    try {
        const updateOperations = {};
        if(name){
            updateOperations.name = name;
        }
        if(category){
            updateOperations.category = category;
        }
        if (permissionsToAdd && permissionsToAdd.length > 0) {
            updateOperations.$addToSet = {
                permissions: { $each: permissionsToAdd }
            };
        }
        if (permissionsToRemove && permissionsToRemove.length > 0) {
            updateOperations.$pull = {
                permissions: { $in: permissionsToRemove }
            };
        }
        const role = await Role.findOneAndUpdate(
            { _id: role_id },
            updateOperations,
            { new: true }
        );

        res.status(200).json({
            success: true,
            data: role
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error updating role",
            error: err.message
        });
    }
};

exports.getRoles = async(req,res)=>{
    const { category } = req.query;
    try{
        const roles = await Role.find({category}).sort({createdAt:-1});
        return res.status(200).json({
            success:true,
            roles
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Error fetching roles",
            error:err
        })
    }
}
exports.getAllRoles = async(req,res)=>{
    try{
        const roles = await Role.find().sort({createdAt:-1});
        return res.status(200).json({
            success:true,
            roles
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Error fetching roles",
            error:err
        })
    }
}
exports.deleteRole = async(req,res)=>{
    try{
        console.log(req.body)
        const {role_id} = req.body
        await Role.findByIdAndDelete(role_id)
        return res.status(200).json({
            success:true,
            message:"Role successfully deleted"
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"Error fetching roles",
            error:err
        })
    }
}

