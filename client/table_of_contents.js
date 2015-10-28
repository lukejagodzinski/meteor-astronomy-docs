Template.TableOfContents.helpers({
  sections: function() {
    return Sections.find();
  }
});

Template.Section.helpers({
  selected: function() {
    var slug = FlowRouter.getParam('slug');
    return this.get('slug') === slug ? 'selected' : '';
  }
});
