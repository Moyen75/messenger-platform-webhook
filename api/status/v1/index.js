const router = require("express").Router();

router.get("/status", (req, res, next) => {
    res.status(200).json("Ok")
})
module.exports = router;