const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts
} = require('../controllers/workoutController')

const router = express.Router()

// GET ALL WORKOUTS
router.get('/', getWorkouts)

// GET A SINGLE WORKOUT
router.get('/:id', getWorkout)

// POST A NEW WORKOUT
router.post('/', createWorkout)

// DELETE A WORKOUT
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

// UPDATE A WORKOUT
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router