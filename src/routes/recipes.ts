import { getRecipe } from "../controllers/recipes/getRecipe";


const express = require('express');
const router = express.Router();

console.log('Loading Routes: ', __filename);

router.get('/:id', getRecipe);

module.exports = router;