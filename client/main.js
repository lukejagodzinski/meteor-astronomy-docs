Session.setDefault('hash', window.location.hash);
$(window).on('hashchange', function() {
  Session.set('hash', window.location.hash);
});

Template.body.onRendered(function() {
  var tmpl = this;

  var main = tmpl.find('#main');
  var anchors = tmpl.findAll('#content [id]');
  var progressBar = tmpl.find('#progress');

  tmpl.setHash = function(hash, scroll) {
    scroll = _.isUndefined(scroll) ? false : scroll;
    if (hash !== window.location.hash) {
      if (!scroll) {
        var currPos = main.scrollTop;
      }
      window.location.replace(Meteor.absoluteUrl() + hash);
      if (!scroll) {
        main.scrollTop = currPos;
      }
    }
  };

  tmpl.setProgress = function(progress) {
    progressBar.style.width = progress + '%';
  };

  tmpl.getHashFromPosition = function() {
    var nextIdx = anchors.length;
    anchors.every(function(anchor, idx) {
      if (anchor.offsetTop > main.scrollTop) {
        nextIdx = idx;
        return false;
      }
      return true;
    });
    var currIdx = Math.max(0, Math.min(anchors.length, nextIdx - 1));
    var currAnchor = anchors[currIdx];
    var hash = '#' + currAnchor.id;
    return hash;
  };

  tmpl.getProgressFromPosition = function() {
    var nextIdx = anchors.length;
    var currIdx = anchors.length;
    anchors.every(function(anchor, idx) {
      if (anchor.offsetTop > main.scrollTop) {
        nextIdx = idx;
        return false;
      }
      return true;
    });
    var currIdx = Math.max(0, Math.min(anchors.length, nextIdx - 1));
    var nextAnchor = anchors[nextIdx];
    var currAnchor = anchors[currIdx];
    if (_.isUndefined(nextAnchor)) {
      return (main.scrollTop - currAnchor.offsetTop) /
        (main.scrollHeight - currAnchor.offsetTop - main.clientHeight) * 100;
      return 0;
    } else {
      return (main.scrollTop - currAnchor.offsetTop) /
        (nextAnchor.offsetTop - currAnchor.offsetTop) * 100;
    }
  };

  if (window.location.hash) {
    if (Sections.find({
      slug: window.location.hash.slice(1)
    }).count()) {
      window.location.replace(Meteor.absoluteUrl() + window.location.hash);
    } else {
      tmpl.setHash(tmpl.getHashFromPosition());
    }
  } else {
    tmpl.setHash(tmpl.getHashFromPosition());
  }

  $(window).on('resize', _.throttle(function(e) {
    tmpl.setHash(tmpl.getHashFromPosition());
    tmpl.setProgress(tmpl.getProgressFromPosition());
  }, 1000 / 5));
});

Template.body.events({
  'scroll #main': _.throttle(function(e, tmpl) {
    tmpl.setHash(tmpl.getHashFromPosition());
    tmpl.setProgress(tmpl.getProgressFromPosition());
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

  'click #sidebar li': function(e, tmpl) {
    var layout = tmpl.find('#layout');
    layout.classList.remove('open');
  }
});
