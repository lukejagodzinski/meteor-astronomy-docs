Template.body.onRendered(function() {
  var tmpl = this;

  var hash = window.location.hash;
  if (hash.charAt(0) === '#') {
    FlowRouter.go('/' + hash.slice(1));
  }

  var main = tmpl.main = tmpl.find('#main');
  var anchors = tmpl.anchors = tmpl.findAll('#content [id]');
  var progressBar = tmpl.progressBar = tmpl.find('#progress');

  tmpl.rendered = true;

  tmpl.setProgress = function(progress) {
    progressBar.style.width = progress + '%';
  };

  tmpl.getProgressFromPosition = function() {
    var curr = main.scrollTop;
    var max = main.scrollHeight - main.clientHeight;
    return curr / max * 100;
  };

  $(window).on('resize', _.throttle(function(e) {
    tmpl.setProgress(tmpl.getProgressFromPosition());
  }, 1000 / 5));
});

Template.body.events({
  'scroll #main': _.throttle(function(e, tmpl) {
    if (tmpl.rendered) {
      var scrollProgress = tmpl.getProgressFromPosition();
      tmpl.setProgress(scrollProgress);
    }
  }, 1000 / 5),

  'click #toggle-menu': function(e, tmpl) {
    var layout = tmpl.find('#layout');
    layout.classList.add('open');
  },

  'click #sidebar': function(e) {
    e.stopPropagation();
  },

  'click #overlay': function(e, tmpl) {
    var layout = tmpl.find('#layout');
    layout.classList.remove('open');
  },

  'click #sidebar a': function(e, tmpl) {
    var section = this;
    var layout = tmpl.find('#layout');
    layout.classList.remove('open');
    tmpl.main.scrollTop = 0;
    tmpl.setProgress(0);
    FlowRouter.go('/' + section.slug);
  }
});
