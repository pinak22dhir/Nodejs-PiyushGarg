const { generate } = require("shortid");
const URL = require("../models/url");

async function handlegenerate(req, res) {
  const body = req.body;
  if (!req.body.url) return res.status(400).json({ error: "url is required" });
  const shortId = generate();
  await URL.create({
    shortid: shortId,
    redirecturl: body.url,
    visitHistory: [],
    createdBy:req.user._id,
  });
  // return res.json({ id: shortId });
  return res.render("home",{
  id:shortId,
  });
}
async function handlenewshort(req, res) {
  const shortid = req.params.shortid;
  const result = await URL.findOne({ shortid });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handlegenerate,
  handlenewshort,
};
