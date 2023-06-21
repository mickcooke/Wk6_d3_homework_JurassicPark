const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;


  beforeEach(function () {
  park = new Park ('Jurassic Park', 150);
  dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
  dinosaur2 = new Dinosaur('triceratops', 'herbivore', 30);
  dinosaur3 = new Dinosaur('veliciraptor', 'carnivore', 25);

  });

  it('should have a name', function () {

    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');

  });

  it('should have a ticket price', function () {

    const actual = park.ticketPrice;
    assert.strictEqual(actual, 150);
  });

  it('should have a collection of dinosaurs', function () {

    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){

    park.addDino(dinosaur1);
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [dinosaur1] )

  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDino(dinosaur1);
    park.removeDino(dinosaur1);
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [])



  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.findPopularDino();
    assert.strictEqual(actual, dinosaur1)


  });

  it('should be able to find all dinosaurs of a particular species', function() {

    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.dinoFindBySpecies('t-rex');
    assert.deepStrictEqual(actual, [dinosaur1]);



  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.visitorsPerDay();
    assert.strictEqual(actual, 105);


  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.visitorsPerYear();
    assert.strictEqual(actual, 38325);

});

  it('should be able to calculate total revenue for one year', function() {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.yearlyRevenue();
    assert.strictEqual(actual, 5748750)


  });

});
