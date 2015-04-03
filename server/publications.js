Meteor.publish('matches', function () {

  return Matches.find({});

});

Meteor.publish('matchUsers', function (userList) {

    check(userList, Array);

    return Meteor.users.find({
        _id: userList
    },
    {
        fields: {
        }
    });

});
