const app = require('express').Router()
const DataModel = require("../Model/data.model.js");
const { generateSlug } = require("../utils/generateSlug.js");
const sequelize=require("../Config/db.config.js")

app.get("/", async(req, res) => {

    const url = await DataModel.create({
        url: "https://google.com",
        slug: "123"
    });
    console.log("inserted url",url)
});
app.post("/create", async (req, res) => {
  const { url } = req.body;
  if (!url) return res.json({ status: "error", message: "url is required" })
  //generate recursive function
 async function checkSlug() {
    const slug = generateSlug()
    const doesExist = await sequelize.models.Data.findOne({
      where:{slug},
    })
    if (doesExist) {
      checkSlug()
    }
    return slug;
  }
  const slug= await checkSlug()
  const response = await DataModel.create({
        url,
        slug,
  });
  res.send({
    status: "success",
    url:"http://localhost:3000/"+slug,
  })
    
    app.get('/:slug',async (req, res) => {
        const { slug } = req.params
        const url = await sequelize.models.Data.findOne({
            where:{slug}
        })
        if (!url) {
            return res.json({status:"error",message:"Invalid url given"})
        }
        res.redirect(url.url)
})

});
module.exports = app;