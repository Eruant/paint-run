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
