Template.TableOfContents.helpers({
  sections: function() {
    return Sections.find();
  }
});

Template.Section.helpers({
  selected: function() {
    return this.get('slug') === Session.get('hash') ? 'selected' : '';
  }
});

Template.Section.events({
  'click a': function(e) {
    Session.set('hash', this.get('slug'));
  }
});
