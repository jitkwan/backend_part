import express from 'express'
const router = express.Router()

import { createActivity, deleteActivity, getAllActivity, updateActivity, showStats } from '../controllers/activityController.js'

router.route('/').post(createActivity).get(getAllActivity);  //21
//remember place before :id
router.route('/stats').get(showStats);   //21
router.route('/:id').delete(deleteActivity).patch(updateActivity);  //21

export default router;  //21