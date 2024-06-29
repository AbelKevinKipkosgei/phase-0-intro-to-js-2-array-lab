// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
  cats.push(name);
  return cats;
};

const destructivelyPrependCat = (name) => {
  cats.unshift(name);
  return cats;
};

const destructivelyRemoveLastCat = () => {
  cats.pop();
  return cats;
};

const destructivelyRemoveFirstCat = () => {
  cats.shift();
  return cats;
};

const appendCat = (name) => {
  return [...cats, name];
};

const prependCat = (name) => {
  return [name, ...cats];
};
const removeLastCat = () => {
  return cats.slice(0, -1);
};
const removeFirstCat = () => {
  return cats.slice(1);
};

destructivelyAppendCat("Ralph");

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

destructivelyPrependCat("Bob");

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

destructivelyRemoveLastCat();

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

destructivelyRemoveFirstCat();

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

appendCat("Broom");
prependCat("Arnold");
removeLastCat();
removeFirstCat();
