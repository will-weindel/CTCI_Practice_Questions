//An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may uyse the built in LikedList data structure.

var Queue = require('./../util/Queue');

Queue.prototype.enqueue = Queue.prototype.add;

// I - various inputs, could be an animal type
// O - animal
// C - Time and Space, animal restrictions, vet size restrictions (capaticity)
// E-DQ's - not animal, no animal, at capacity

// DS - could use two queue (one for dogs, one for cats)
// AP - loop through
// TR - n/a

// create two queues (one for dogs, one for cats)
// dequeue animals seperately (if requested)
// add a timestamp to each animal and compare (this will let us get the oldest)

var AnimalShelter = function () {
  this.dogQueue = new Queue;
  this.catQueue = new Queue;
};

AnimalShelter.prototype.enqueue = function (animal) {
  if (animal === 'cat') this.catQueue.enqueue(animal);
  else this.dogQueue.enqueue(animal);
};

AnimalShelter.prototype.dequeueAny = function () {
  //
};

AnimalShelter.prototype.dequeueByType = function (type) {
  return type === cat ? this.catQueue.dequeue() : this.dogQueue.dequeue();
};

AnimalShelter.prototype.dequeueDog = function () {
  return this.dogQueue.dequeue();
};

AnimalShelter.prototype.dequeueCat = function () {
  return this.catQueue.dequeue();
};

module.exports = AnimalShelter;
