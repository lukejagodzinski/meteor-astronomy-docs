Template.TableOfContents.helpers({
  sections: function() {
    return Sections.find();
  }
});

Template.Section.helpers({
  selected: function() {
    var route = Router.current();
    return route.params.slug === this.slug ? 'selected' : '';
  }
})
