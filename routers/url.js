const express = require("express");
const { handlegenerate, handlenewshort } = require("../controllers/url");

const router = express.Router();

router.post("/", handlegenerate);
router.get("/analytics/:shortid", handlenewshort);

module.exports = router;
