Template.Title.helpers({
  section: function() {
    var slug = FlowRouter.getParam('slug');
    return Sections.findOne({
      slug: slug
    });
  }
});
