Router.configure({
  layoutTemplate: 'Layout'
});

var ucfirst = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

Router.route('/:page', function() {
  var segments = this.params.page.split('-');
  segments = _.map(segments, function(segment) {
    return ucfirst(segment);
  });
  var templateName = segments.join('');

  this.render(templateName);
});
