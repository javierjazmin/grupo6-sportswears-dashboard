const express = require("express");
const router = express.Router();

const productApi = require("../../controllers/Api/productApi");

router.get("/", productApi.products);

router.get("/search", productApi.search);

router.get("/:id", productApi.productDetail);


module.exports = router;