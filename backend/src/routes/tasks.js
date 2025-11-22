const express = require('express');
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getTaskSuggestions,
  getAnalytics,
} = require('../controllers/taskController');
const auth = require('../middleware/auth');
const { createTaskLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.use(auth);

router.get('/analytics', getAnalytics);
router.post('/suggestions', getTaskSuggestions);
router.route('/').get(getTasks).post(createTaskLimiter, createTask);
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
