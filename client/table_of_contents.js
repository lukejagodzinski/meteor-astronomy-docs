Template.TableOfContents.helpers({
  sections: function() {
    return Sections.find();
  }
});

Template.Section.helpers({
  selected: function() {
    return this.get('slug') === Session.get('hash').slice(1) ? 'selected' : '';
  }
});
