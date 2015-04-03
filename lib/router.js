Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: '404'
});

Router.route('/', {
  name: 'matchList',
  waitOn: function () {
    return [
      Meteor.subscribe('matches')
    ];
  }
});

Router.route('/matches/:_id', {
  name: 'match',
  data: function () {
    return Matches.findOne(this.params._id);
  },
  waitOn: function () {
    return [
      Meteor.subscribe('matches')
    ];
  },
  onBeforeAction: function () {

    if (!Meteor.user()) {
      return Router.go('/');
    }

    var match = Matches.findOne(this.params._id);
    var playerInMatch = _.contains(match.currentUsers, Meteor.user()._id);

    Meteor.subscribe('matchUsers', match.currentUsers);

    if (playerInMatch) {
      this.next();
    } else {
      Router.go('/');
    }
  }
});
