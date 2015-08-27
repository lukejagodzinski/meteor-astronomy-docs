var data = [
  'What is Astronomy?',
  'Features',
  'Getting started',
  'Key concepts',
  [
    'Defining fields',
    'Setting and getting values',
    'Saving and removing',
    'Fetching documents',
    'Events system',
    'Indexes',
    'Inheritance'
  ],
  'Advanced usage',
  [
    'Custom types',
    'Writing modules',
    'Writing behaviors'
  ]
];

Sections = new Mongo.Collection(null);

var ucfirst = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

Section = Astro.Class({
  name: 'Section',
  collection: Sections,
  fields: {
    title: 'string',
    depth: 'number',
    template: 'string'
  },
  methods: {
    depthIs: function(depth) {
      return this.get('depth') === depth;
    }
  },
  events: {
    beforeInsert: function() {
      var segments = this.slug.split('-');
      segments = _.map(segments, function(segment) {
        return ucfirst(segment);
      });
      var template = segments.join('');
      this.set('template', template);
    }
  },
  behaviors: {
    slug: {
      fieldName: 'title'
    }
  }
});

var populateCollection = function(items, depth) {
  if (_.isUndefined(depth)) {
    depth = 1;
  }

  _.each(items, function(item) {
    if (!item) {
      return;
    }

    if (_.isArray(item)) {
      populateCollection(item, depth + 1);
    } else {
      var section = new Section();

      if (_.isString(item)) {
        section.set('title', item);
      } else if (_.isObject(item)) {
        section.set(item);
      }

      section.set('depth', depth);

      section.save();
    }
  });
};

Meteor.startup(function() {
  populateCollection(data);
});
