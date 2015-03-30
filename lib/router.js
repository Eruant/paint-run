Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', {
  name: 'matchList',
  waitOn: function () {
    return [
      Meteor.subscribe('matches')
    ];
  }
});
