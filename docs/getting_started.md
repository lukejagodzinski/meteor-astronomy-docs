{{#template name="GettingStarted"}}
First, you have to create a Meteor project:

```sh
meteor create myapp
```

Open the project's directory and add the Astronomy package.

```sh
cd myapp
meteor add jagi:astronomy
```

You're ready to go.

# Creating a first class

We will start from showing the simplest possible class implementation.

```js
Posts = new Mongo.Collection('posts');

Post = Astro.Class({
  name: 'Post',
  collection: Posts
});
```

As you can see, we've created the Mongo collection named `Posts` and the `Post`  class. It's good to keep this convention. The **Posts** (plural) collection is a container for documents of the **Post** (singular) class. We provided two attributes: `name` and `collection`. The `name` attribute is obligatory and it's just an internal name of the class. The `collection` attribute just tells our class in which collection instances of our class should be stored.

Now, we can create instance of our class.

```js
var post = new Post();
```

Our class is very simple and right now doesn't make our lives easier. It doesn't have any fields, so let's change it.

```js
Post = Astro.Class({
  name: 'Post',
  collection: Posts,
  fields: {
    title: 'string',
    publishedAt: 'date'
  }
});
```

Let's create an instance of the class and fill it with some values.

```js
var post = new Post({
  title: 'Sample title',
  publishedAt: new Date()
});
```

How to save the document into database? Nothing simpler.

```js
post.save();
```

Assume that after a while, we want to change a title of the post.

```js
var post = Posts.findOne({title: 'Sample title'});
post.set('title', 'New title');
post.save();
```

In the listing above, we just fetch previously saved document and modify its title using the `set` function. After calling the `save` method only the title of the document will be updated in the database.

# Adding validation

It was very short introduction that covered a tiny portion of Astronomy features. If you want to read more about Astronomy please take a look at the other sections in this documentation.

{{/template}}
