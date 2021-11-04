const express = require('express')
const router = express.Router()

const {validation} = require("../../middlewares");
const {joiContactSchema} = require("../../validations");

router.get('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/', validation(joiContactSchema), async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
