Template.matchItem.helpers({

  currentCount: function () {
    return this.currentUsers.length;
  },

  canJoin: function () {
    return (this.currentUsers.length < this.slots) && Meteor.user();
  }

});

Template.matchItem.events({

  'click .ev-join': function (e) {

    var matchId = this._id;

    Meteor.call('joinMatch', matchId);
  }

});
