Template.match.helpers({

    currentUser: function () {
        return Meteor.userId();
    },

    players: function () {

        return Meteor.users.find({});

    }

});
