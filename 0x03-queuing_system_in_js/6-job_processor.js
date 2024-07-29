import { createQueue } from 'kue';

const queue = createQueue();

const sendNotification = (phoneNumber, message) => {
  const message = `Sending notification to ${phoneNumber}, with message: ${message}`;
  console.log(message);
};

queue.process('push_notification_code', (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message);
  done();
});
