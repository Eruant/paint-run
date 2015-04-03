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

        console.log('clicked', e);
    }

});
