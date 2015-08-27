Session.setDefault('hash', window.location.hash);
$(window).on('hashchange', function() {
  Session.set('hash', window.location.hash);
});

Template.body.onRendered(function() {
  var tmpl = this;

  window.location.replace(Meteor.absoluteUrl() + window.location.hash);

  var container = tmpl.find('#container');
  var anchors = tmpl.findAll('#content [id]');
  var progress = tmpl.find('#progress');

  tmpl.changeHash = function(hash) {
    if (hash !== window.location.hash) {
      var currPos = container.scrollTop;
      window.location.replace(Meteor.absoluteUrl() + hash);
      // tmpl.overlayHeader();
      container.scrollTop = currPos;
    }
  };

  tmpl.getHashFromPosition = function() {
    var hash;
    anchors.every(function(anchor, i) {
      if (anchor.offsetTop > container.scrollTop) {
        var nextIdx = i;
        var currIdx = Math.max(0, Math.min(anchors.length, i - 1));
        var nextAnchor = anchors[nextIdx];
        var currAnchor = anchors[currIdx];
        var prog = ((container.scrollTop - currAnchor.offsetTop) /
          (nextAnchor.offsetTop - currAnchor.offsetTop) * 100).toFixed(2);
        progress.style.width = prog + '%';
        hash = '#' + currAnchor.id;
        return false;
      }
      return true;
    });
    return hash;
  };

  tmpl.calculateProgres = function() {
    var hash = Session.get('hash');
  };
});

Template.body.events({
  'scroll #container': _.throttle(function(e, tmpl) {
    var hash = tmpl.getHashFromPosition();
    tmpl.changeHash(hash);
  }, 1000 / 10)
});
