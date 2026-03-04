/**
 *       Online Learning Platform
 */
/* const user = {
  _id: Schema.types.ObjectId(),
  email: String,
  password: String,
  name: String,
};
const role = {
  _id: Schema.types.ObjectId(),
  name: String,
  description: String,
  role: [
    {
      type: ObjectId(),
      ref: "permission",
    },
  ],
};
const permission = {
  _id: Schema.types.ObjectId(),
  name: String,
  url: String,
  baseURL: String,
  method: String,
  action: String,
};
const course = {
  _id: Schema.types.ObjectId(),
  title: String,
  description: String,
  price: Number,
  status: {
    type: String,
    enum: ['published','pending'],
  },
};
const lessons = {
  _id: Schema.type.ObjectId(),
  title: String,
  content: String,
  videoURL: String,
  //order
  createdAt: TimeRanges,

}
progress = {
  _id: Schema.types.ObjectId(),
  lessonId : {
    types : Schema.types.ObjectId(),
    ref: 'leasons',
  }
  
}
enrollments = {
  _id: Schema.types.ObjectId(),
  userId: Schema.types.ObjectId(),
  courseId: Schema.types.ObjectId(),
  enrollmentDate: Date,
}
review ={
  _id: Schema.types.ObjectId(),
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
    comment: String,
  }
} */
/* 
const { Worker } = require("worker_threads");

const worker = new Worker("./worker.js");

worker.on("message", (msg) => {
  console.log(msg);
});

worker.on("error", (error) => {
  console.log(error);
});

worker.postMessage({ s: 1, e: 100 });

worker.postMessage({ s: 51, e: 100, close: true });
 */

const to24Hour = (time) => {
  let TIME_24H_REGEX= /^([01]\d|2[0-3]):([0-5]\d)$/;
  let TIME_12H_REGEX= /^(0?[1-9]|1[0-2]):([0-5]\d)\s?(AM|PM)$/i;
  if(TIME_24H_REGEX.test(time)) return time;

  const match = time.match(TIME_12H_REGEX);
  if (!match) throw new Error('Invalid time format');
  console.log(match)
//   [
//   '11:20 pM',
//   '11',
//   '20',
//   'pM',
//   index: 0,
//   input: '11:20 pM',
//   groups: undefined
// ]
  let [, hours, minutes, period] = match;
  hours = parseInt(hours, 10);

  if (period.toUpperCase() === 'PM' && hours !== 12) hours += 12;
  if (period.toUpperCase() === 'AM' && hours === 12) hours = 0;

  return `${hours.toString().padStart(2, '0')}:${minutes}`;
};

console.log(to24Hour('1:20 pM'))