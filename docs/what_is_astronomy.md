{{#template name='WhatIsAstronomy'}}
The [Astronomy](https://atmospherejs.com/jagi/astronomy) package introduces the [Model Layer](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) for Meteor collections. It can also be named the Object Document Mapping system (ODM) or for people coming from relational database environments the Object-Relational Mapping system (ORM).

Leaving terminology on the side, it gives you possibility to define document's schema that includes fields definition, methods, events, validators and many more. Thanks to that programming is much easier and the amount of code much smaller. But a picture is worth a thousand words, so let's take a look at a simple example.

**Example**

When fetching documents from Mongo collections, you get plain JavaScript objects without any logic. You have to implement document's logic, validate attributes, check what fields have changed, save only modified fields, transform values coming from forms, in every place you are changing a document. A lot of things to do. Wouldn't it be great if you could define some simple rules and leave everything else to framework? It's actually possible thanks to Astronomy. But first let's take a look at how your code might look like without using Astronomy.

```js
var post = Posts.findOne();
// Assign values manually instead doing it automatically.
post.createdAt = new Date();
post.userId = Meteor.userId();
// Manually convert values coming from the form.
post.title = tmpl.find('input[name=title]').value;
post.publishedAt = new Date(tmpl.find('input[name=publishedAt]').value);
// Every time implement custom validation logic.
if (post.title.length < 3) {
  // Implement an error messages system.
  throw new Error('The "title" field has to be at least 3 characters long');
} else {
  // Detect what fields have changed and update only those.
  // Access collection directly.
  Posts.update({
    _id: post._id
  }, {
    $set: {
      title: post.title,
      publishedAt: post.publishedAt,
      createdAt: post.updateAt
    }
  });
}
```

In Astronomy with the defined schema you would do just like this:

```js
var post = Posts.findOne();
// Auto convert a string input value to a number.
post.set('title', tmpl.find('input[name=title]').value);
post.set('publishedAt', tmpl.find('input[name=publishedAt]').value);
// Check if all fields are valid.
if (post.validate()) {
  // Update document with with only the fields that have changed.
  post.save();
}
```

What approach is simpler? I think, the choice is obvious.

**History**

The idea of creating a package for Meteor that would introduce a Model Layer emerged after creating several simple Meteor applications. I noticed that I was constantly repeating the same parts of a code to manage documents' storage and validation. It was frustrating in comparison to what I've accustomed to in the [Doctrine](http://www.doctrine-project.org/) library for [PHP](https://php.net/) language that I had used for many years.

This is why I've decided to create a Meteor package that would take the best from the Doctrine library. The first version was released in 2013 and was named [Verin Model](https://github.com/jagi/verin-model). It worked well in my projects, so I made it available through the [Meteorite](https://github.com/oortcloud/meteorite/) package installer. However, I haven't been promoting it anywhere so the number of users was limited.

In the late 2014, I decided to give it one more try and implement a much better package. The package that would be modular, would have all the features from the previous package and few more additions. In the meanwhile, many developers tried to fill a gap in Meteor with their packages. Some of them (e.g. [SimpleSchema](https://atmospherejs.com/aldeed/simple-schema)) had features that I was looking for, on the other hand they were too complex to use. Some packages just focused on single features ([Collection Hooks](https://atmospherejs.com/matb33/collection-hooks), [Collection Behaviours](https://atmospherejs.com/sewdn/collection-behaviours), [Collection Helpers](https://atmospherejs.com/dburles/collection-helpers)). Plus, I didn't like the idea of using many packages that followed quite different rules. I just wanted one modular tool that would fit all my needs. That's why I've created Astronomy.

**Why the name "Astronomy"?**

As almost everything, that is Meteor-related, has some space-related name. This one couldn't be an exception. The model layer in the MVC pattern is a description of real objects. And, the science describing objects in space is called [Astronomy](http://en.wikipedia.org/wiki/Astronomy). The choice was quick.
{{/template}}
{{/template}}
