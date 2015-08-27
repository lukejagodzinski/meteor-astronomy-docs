Session.setDefault('hash', window.location.hash);
$(window).on('hashchange', function() {
  Session.set('hash', window.location.hash);
  console.log('changed');
});

Template.body.rendered = function() {
  var tmpl = this;

  window.location.replace(Meteor.absoluteUrl() + Session.get('hash'));

  var container = tmpl.find('#container');
  var anchors = tmpl.findAll('#content [id]');

  tmpl.overlayHeader = function() {
    var slug = Session.get('hash').slice(1);
    anchors.forEach(function(anchor) {
      // if (anchor.id === slug) {
      //   anchor.style.position = 'fixed';
      // } else {
      //   anchor.style.position = 'static';
      // }
    });
  };

  tmpl.changeHash = function(hash) {
    if (hash !== window.location.hash) {
      var currPos = container.scrollTop;
      window.location.replace(Meteor.absoluteUrl() + hash);
      tmpl.overlayHeader();
      container.scrollTop = currPos;
    }
  };

  tmpl.getHashFromPosition = function() {
    var hash;
    anchors.every(function(anchor, i) {
      if (anchor.offsetTop > container.scrollTop) {
        hash = '#' + anchors[Math.max(0, Math.min(anchors.length, i - 1))].id;
        return false;
      }
      return true;
    });
    return hash;
  }
};

Template.body.events({
  'scroll #container': _.debounce(function(e, tmpl) {
    var hash = tmpl.getHashFromPosition();
    tmpl.changeHash(hash);
  }, 1000 / 60)
});
