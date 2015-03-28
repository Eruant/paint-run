if (Matches.find().count() === 0) {

  Matches.insert({
    name: 'The paint room',
    slots: 10,
    currentUsers: []
  });
}
