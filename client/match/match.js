Template.match.helpers({

    players: function () {

        return Meteor.users.find();

    }

});
