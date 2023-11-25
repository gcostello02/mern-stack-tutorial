const express = require('express')
const Workout = require('../models/workoutModel')

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
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE A WORKOUT
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

// UPDATE A WORKOUT
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router