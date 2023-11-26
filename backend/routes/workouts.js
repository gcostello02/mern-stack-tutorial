const express = require('express')
const {
    createWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET ALL WORKOUTS
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

// GET A SINGLE WORKOUT
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

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