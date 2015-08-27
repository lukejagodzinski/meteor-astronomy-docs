Template.Title.helpers({
  section: function() {
    var slug = Session.get('hash').slice(1);
    var section = Sections.findOne({
      slug: slug
    });
    return section;
  }
});
