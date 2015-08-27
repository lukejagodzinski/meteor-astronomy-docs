{{#template name="Features"}}

Astronomy is highly modularized. Some basic features comes with the base `jagi:astronomy` package. Others have to be added as separate modules / packages. Here is a list of all the features with a short description.

**Document transformation**

Documents fetched from collections are not simple JavaScript objects but instances of a class you've created.

**Field's type**

When defining fields list in the class, you can specify their types like `string`, `number`, `boolean` etc. Thanks to that, when setting field's value, it will be automatically casted on the given type.

**Field's default value**

On document initialization, you may want to set default values of some fields. In Astronomy it's easy to do. You can also use functions to compute default value.

**Nested fields / classes**

You can nest one or many classes in a field. Thanks to that you can define types of fields and default values of nested objects and arrays.

**Document's EJSON-ification**

[EJSON](http://docs.meteor.com/#/full/ejson) is an extension of JSON that supports more types. When sending documents from the client to the server over the DDP protocol (for instance in Meteor methods), they got stringified using the `EJSON.strinigify()` function. Astronomy classes are EJSON compatible, so you can send them over the DDP.

**Methods**

You can define methods in a class, so your document is not only a data storage but "live" thing. Your dog can bark `dog.bark();` and your user can greet you `user.sayHello();`.

**Events**

Astronomy implements events system that allows you to hook into many processes happening inside the package. You can hook into process of saving document. Let's say you want to lowercase user's nickname just before saving document. With Astronomy it's simple.

**Getters and setters**

Each Astronomy document has `get()` and `set()` methods. Thanks to them you can get and set multiple fields at once. They can also perform operation on nested properties `user.set('profile.email', 'example@mail.com')`. Moreover, when using them the `beforeGet`, `afterGet`, `beforeSet` and `afterSet` events are triggered and you can hook into the process of getting and setting a value.

**Modified fields**

Thanks to the `doc.getModified()` method you can access fields that had been modified from the last save.

**Cloning document**

It allows making copies of documents already stored in the database. You can automatically save a copy or modify it before saving `var copy = post.copy();`.

**Reloading document**

Sometimes after introducing some changes into your document, you may want to reverse them. For that task you can use the `reload()` method.

**Indexes**

Thanks to that feature you can define indexes that will be created on given fields / columns to speed up the process of fetching data.

**Inheritance**

When having classes with similar schemas, sometimes it's simpler to create a base class and extend it by adding only features that differs.

**Multiple classes in the same collection**

You can store documents of many classes in the same collection. You just have to specify a field responsible for distinguishing what is the given document instance of.

**Validation**

The Validators module is responsible for making sure that fields' values in your document are in the proper format. You can for example check whether an e-mail address is valid. To use this module you have to add it to your project `meteor add jagi:astronomy-validators`.

**Validation order**

You can define the order in which validation will take place.

**Validation on direct collection access**

Astronomy gives you a way of performing validation on documents insert and update when directly accessing collection.

**Simple validation**

The Simple Validators module is an extension of the Validators module. It just allows to create validation rules in the form of string instead of functions. However, this approach limits some functionalities. To use this module you have add it to your project `meteor add jagi:astronomy-simple-validators`. You don't have to add the `jagi:astronomy-validators` module when using Simple Validators.

**Relations**

_NOTE: This module is a work in progress and you're using it at your own risk._

The Relations module allows defining relations between documents of different classes. Thanks to that, we can easily fetch related documents. We can create one to one, one to many, and many to many relations. To use this module you have to add it to your project `meteor add jagi:astronomy-relations`.

**Query Builder**

_NOTE: This module is a work in progress and you're using it at your own risk._

The Query Builder module is an abstraction layer for accessing data in your database. To use this module you have to add it to your project `meteor add jagi:astronomy-query-builder`.

**Behaviors module**

The Behaviors module is a nice way of reusing your code for more than one class. If you have similar features in two or more classes, you should consider creating behavior for a such feature. An example of good behavior can be `createdAt` and `updateAt` fields which should be filled with the current date on document save and on every document update. You don't need to use Behaviors module directly as long as you don't want to create your own behavior. Instead, you'll be using one of the modules listed below.

**Timestamp behavior**

The Timestamp Behavior adds two fields that store information about document's creation and update dates. Those fields are automatically filled with the proper date. To use this behavior you have to add it to your project `meteor add jagi:astronomy-timestamp-behavior`.

**Slug behavior**

The Slug Behavior adds a slug field for storing URL friendly value of a chosen field. The text `Tytuł artykułu` will be converted to the `tytul-artykulu`. The slug field can be used in the routing `http://localhost:3000/post/tytul-artykulu`. To use this behavior you have to add it to your project `meteor add jagi:astronomy-slug-behavior`.

**Sort behavior**

The Sort Behavior helps with sorting documents. It delivers several useful methods to manage sorting like `post.moveUp();` or `post.moveBy(2);`. To use this behavior you have to add it to your project `meteor add jagi:astronomy-sort-behavior`.

**Softremove behavior**

The Softremove Behavior adds the `softRemove()` method to your class that won't remove a document. Instead, it will flag the document as removed and you will be able to omit such documents on documents fetch. To use this behavior you have to add it to your project `meteor add jagi:astronomy-softremove-behavior`.
{{/template}}
