Meteor.publish('matches', function () {

  return Matches.find({});

});

Meteor.publish('matchUsers', function (userList) {

    check(userList, Array);

    // meteor-user-status
    // https://github.com/mizzao/meteor-user-status
    return Meteor.users.find({
        "status.online": true
    },
    {
        fields: {
        }
    });

});
