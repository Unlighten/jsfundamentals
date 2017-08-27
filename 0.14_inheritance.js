//Inheritance

//This is a fairly easy concept to understand.
//You are taking an Object and passing perameters down.

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};
