const categoryModel=require("../Model/Category");


const createCategory=async function(req,res){
    const{category_name}=req.body;
    const newCategory=new categoryModel({
        category_name:category_name,
        userID: req.userID
    });
    try{
        await newCategory.save();
        res.status(201).json(newCategory)
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}



const deleteCategory= async function (req, res) {
    const id = req.params.id;
    try {
        const category=await categoryModel.findByIdAndRemove(id);
        res.status(202).json(category)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}

const getCategory= async function (req, res) {
    try {
        const category = await categoryModel.find({ userID: req.userID })
        res.status(200).json(category)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }

}

module.exports = { createCategory, deleteCategory, getCategory }