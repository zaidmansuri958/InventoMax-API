const itemModel = require("../Model/Item")

const createItem = async function (req, res) {
    const { item_name, purchase_price, selling_price, unit, current_stock, low_stock, category} = req.body;
    const newItem = new itemModel({
        item_name: item_name,
        purchase_price: purchase_price,
        selling_price: selling_price,
        unit: unit,
        current_stock: current_stock,
        low_stock: low_stock,
        category: category,
        userID: req.userID
    });
    try {
        await newItem.save();
        res.status(201).json(newItem)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}

const deleteItem = async function (req, res) {
    const id = req.params.id;
    try {
        const item=await itemModel.findByIdAndRemove(id);
        res.status(202).json(item)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}

const getItems= async function (req, res) {
    try {
        const items = await itemModel.find({ userID: req.userID })
        res.status(200).json(items)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }

}

module.exports = { createItem, deleteItem, getItems }