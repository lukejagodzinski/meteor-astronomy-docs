Router.configure({
  layoutTemplate: 'Layout'
});

Router.route('/', function() {
  var section = Sections.findOne();
  Router.go('/' + section.get('slug'));

  this.next();
});

Router.route('/:slug?', function() {
  var section = Sections.findOne({
    slug: this.params.slug
  });

  if (section) {
    Session.set('title', section.title);
    this.render(section.template);
  }

  this.next();
});
