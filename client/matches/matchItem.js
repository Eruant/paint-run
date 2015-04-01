Template.matchItem.helpers({

  currentCount: function () {
    return this.currentUsers.length;
  },

  canJoin: function () {
    return (this.currentUsers.length < this.slots);
  }

});
