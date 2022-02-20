const Category = require("../models/category");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await new Category({
      name: name,
      slug: slugify(name),
    }).save();
    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(400).send("Create Category Failed");
  }
};
exports.list = async (req, res) => {
  res.json(await Category.find({}).sort({ createdAt: -1 }).exec());
};
exports.read = async (req, res) => {
    let category = await Category.findOne({slug:req.params.slug}).exec();
    res.json(category);
};

exports.update = async (req, res) => {};

exports.remove = async (req, res) => {};
