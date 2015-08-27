Template.Contents.helpers({
  sections: function() {
    return Sections.find();
  }
});

Template.Contents.rendered =  function() {
  navigate();
};
