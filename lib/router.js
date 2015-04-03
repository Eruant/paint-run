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
  }
});
