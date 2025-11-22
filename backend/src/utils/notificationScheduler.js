const cron = require('node-cron');
const Task = require('../models/Task');

// Check for upcoming deadlines and send notifications
const checkDeadlines = async () => {
  try {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(23, 59, 59, 999);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Find tasks with deadlines tomorrow that haven't been notified
    const tasks = await Task.find({
      deadline: { $gte: today, $lte: tomorrow },
      status: { $ne: 'completed' },
      notificationSent: false,
    }).populate('user', 'name email');

    if (tasks.length > 0) {
      console.log(`Found ${tasks.length} tasks with upcoming deadlines`);
      
      for (const task of tasks) {
        // In a production environment, you would send actual email/push notifications here
        console.log(`Notification: Task "${task.title}" is due for ${task.user.name}`);
        
        // Mark notification as sent
        task.notificationSent = true;
        await task.save();
      }
    }
  } catch (error) {
    console.error('Error checking deadlines:', error);
  }
};

// Run every day at 9 AM
const startNotificationScheduler = () => {
  cron.schedule('0 9 * * *', () => {
    console.log('Running deadline notification check...');
    checkDeadlines();
  });

  console.log('Notification scheduler started');
};

module.exports = { startNotificationScheduler, checkDeadlines };
