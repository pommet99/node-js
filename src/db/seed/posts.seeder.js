const { Seeder } = require('mongoose-data-seed');
const Model = require('../models/postModel');
const faker = require('faker');


const data = [];

for (let i = 0; i < 10; i++){
  data.push({
    title: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    image: faker.image.imageUrl(),
    body: faker.lorem.paragraphs()

  })
}


class PostsSeeder extends Seeder {

  async shouldRun() {
    return Post.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Model.create(data);
  }
}

module.exports = PostSeeder;

