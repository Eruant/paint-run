Matches = new Mongo.Collection('matches');

Meteor.methods({

  joinMatch: function (id) {

    check(this.userId, String);
    check(id, String);

    var user = Meteor.user();


    var match = Matches.findOne({
      _id: id
    });

    // check to make sure that the match is empty
    if (match.currentUsers.length >= match.slots) {
      return false;
    }

    var updated = Matches.update(id, {
      $addToSet: {
        currentUsers: user._id
      }
    });

  }

});
