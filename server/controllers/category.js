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
  let category = await Category.findOne({ slug: req.params.slug }).exec();
  res.json(category);
};

exports.update = async (req, res) => {
  const { name } = req.body;
  try {
    const update = await Category.findOneAndUpdate(
      { slug: req.params.slug },
      { name: req.body.name, slug: slugify(name) },
      {new:true}
    );
    res.json(update)
  } catch (err) {
    console.log(err);
    res.status(400).send("Update Category Failed");
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Category.findOneAndDelete({
      slug: req.params.slug,
    }).exec();
    req.json(deleted);
  } catch (err) {
    console.log(err);
    res.status(400).send("Delete Category Failed");
  }
};
