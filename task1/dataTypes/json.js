// Turn the object into JSON and back
let user = {
  name: "John Smith",
  age: 35
};

let json = JSON.stringify(user); // turn into JSON
let user2 = JSON.parse(json);     // read back

alert(json);
alert(user2.name); // John Smith
alert(user2.age);  // 35

// Exclude backreferences
let room = { number: 23 };

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
  if (value === meetup) return undefined; // remove circular reference
  return value;
}));