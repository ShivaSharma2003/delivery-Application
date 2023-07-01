import express from 'express'
import Authorize from '../../../Middleware/AuthorizeMiddleware.js'
import { AddNewRestaurantDish } from '../../../Controller/Admin/Dishes/DishesController.js'
import { DishMultersend } from '../../../Middleware/DishesMiddleware.js'

const router = express.Router()

router.post('/api/restaurant/dish/new/add' , DishMultersend, Authorize , AddNewRestaurantDish)

export default router