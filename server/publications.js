Meteor.publish('matches', function () {

  return Matches.find({});

});

Meteor.publish('matchUsers', function (userList) {

    check(userList, Array);

    // meteor-user-status
    // https://github.com/mizzao/meteor-user-status
    var users = Meteor.users.find({
        "status.online": true,
        _id: {
            $in: userList
        }
    },
    {
        fields: {
            username: true
        }
    });

    return users;

});
