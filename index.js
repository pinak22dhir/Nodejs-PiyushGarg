const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const path = require("path");
const userRoute=require("./routers/user.js")
const URL = require("./models/url");
const { connecttodb } = require("./connect");
const urlroute = require("./routers/url");
const {restrictologin}=require("./middlewares/auth.js")
const staticroute = require("./routers/staticrouter.js");
const port = 8002;
connecttodb("mongodb://localhost:27017/short-url").then(() =>
    console.log("mongoose connected")
);
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(cookieParser());  
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/static", staticroute);
app.use("/url", restrictologin,urlroute);
app.use("/user", userRoute);

// app.get("/test", async (req, res) => {
//   const alluser = await URL.find({});
//   return res.render("home", { urls: alluser });
// });
app.get("/:shortid", async (req, res) => {
    const shortid = req.params.shortid;
    const entry = await URL.findOneAndUpdate(
        {
            shortid,
        },
        {
            $push: {
                visitHistory: { timestamps: Date.now() },
            },
        }
    );
    return res.redirect(entry?.redirecturl);
});

app.listen(port, () => {
  console.log("server started");
});