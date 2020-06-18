/* eslint-disable spaced-comment */
/* eslint-disable no-console */
// const db = require('./index.js');

const faker = require('faker');

const photoUrls = [ // 11 photos
  'https://rooms.s3-us-west-1.amazonaws.com/0ab86de4-fa36-40d3-9d6f-c0a773108720.jpg',
  'https://rooms.s3-us-west-1.amazonaws.com/215966d4-c983-48d6-80ff-3cc5e9ed364d.jpg',
  'https://rooms.s3-us-west-1.amazonaws.com/226a5d6e-af7c-4780-9138-a41b37a0cadf.jpg',
  'https://rooms.s3-us-west-1.amazonaws.com/4c86a247-7f3d-420f-af8d-7127b058e4fd.jpg',
  'https://rooms.s3-us-west-1.amazonaws.com/5c42f4dd-e7be-41dd-9f87-a883fc0d873d.jpg',
  'https://rooms.s3-us-west-1.amazonaws.com/7b228af7-7d6d-4c72-9adb-c83edc0d4147.jpg',
  'https://rooms.s3-us-west-1.amazonaws.com/855bdc11-2683-4d04-9102-f8eb488d7609.jpg',
  'https://rooms.s3-us-west-1.amazonaws.com/8fb926fa-082a-428c-9e48-3ec496a6c472.jpg',
  'https://rooms.s3-us-west-1.amazonaws.com/9dfaa5cf-1a77-415b-8c54-6844d83c0739.jpg',
  'https://rooms.s3-us-west-1.amazonaws.com/e53a5b88-34d0-4007-afec-e80bcdac7027.jpg',
  'https://rooms.s3-us-west-1.amazonaws.com/e77bedc1-4e8c-4539-b9f1-1423d4bddd8b.jpg',
];

const getRandomPhotoUrl = () => {
  const max = photoUrls.length - 1;
  const min = 0;
  //randominze numbers including max and min
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  return photoUrls[randomIndex];
};

const randomPhotoUrl = getRandomPhotoUrl();

// title
// description
// isSuperhost
// cost
// ratings - array [rating1, rating2, ]

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();

const jobTitle = faker.name.jobTitle();
const prefix = faker.name.prefix();
const suffix = faker.name.suffix();
const jobArea = faker.name.jobArea();

const phone = faker.phone.phoneNumber();

console.log(`random photoUrl: ${randomPhotoUrl}`);
console.log(`Employee: ${prefix} ${firstName} ${lastName} ${suffix}`);
console.log(`Job title: ${jobTitle}`);
console.log(`Job area: ${jobArea}`);
console.log(`Phone: ${phone}`);
