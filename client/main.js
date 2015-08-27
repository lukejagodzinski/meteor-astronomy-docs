Meteor.startup(function() {
  Session.set('hash', window.location.hash.slice(1));
});

navigate = _.throttle(function() {
  window.location.replace('#' + Session.get('hash'));
}, 1000 / 60);

window.addEventListener('resize', function() {
  navigate();
});
