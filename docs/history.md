{{#template name='History'}}
## History

The idea of creating a package for Meteor that would introduce a model layer, emerged after creating several simple Meteor applications. I noticed that I was constantly repeating the same parts of a code to manage document storage and validation. It was definitely frustrating in comparison to what I could do in the [Doctrine](http://www.doctrine-project.org/) library for [PHP](https://php.net/) language that I had used for many years.

### First try

This is why I've decided to create a Meteor package that would take the best from the Doctrine library. The first version was released in 2013 and was named [Verin Model](https://github.com/jagi/verin-model). It worked well in my projects, so I made it available through the [Meteorite](https://github.com/oortcloud/meteorite/) package installer. However, I haven't been promoting it anywhere so the number of users was limited.

### Second try

In the late 2014, I decided to give it one more try and implement a much better package. The package that would be modular, would have all the features from the previous package and few more additions. In the meanwhile, many other packages appeared on the Atmosphere that was trying to fill a gap of not having a model layer in Meteor. Some of them (e.g. [SimpleSchema](https://atmospherejs.com/aldeed/simple-schema)) had features that I was looking for, on the other hand they were too complex to use. Some packages just focused on single features ([Collection Hooks](https://atmospherejs.com/matb33/collection-hooks), [Collection Behaviours](https://atmospherejs.com/sewdn/collection-behaviours), [Collection Helpers](https://atmospherejs.com/dburles/collection-helpers)). Plus, I didn't like the idea of using many packages that followed quite different rules, some of them modifying Meteor's core, others introducing. I just wanted one modular tool that would fit all my needs. That's why I've created **Astronomy**.

### Why the name Astronomy?

As almost everything, that is Meteor-related, has some space-related name. This one couldn't be an exception. The model layer in the MVC pattern is a description of real objects. And, the science describing objects in space is called [Astronomy](http://en.wikipedia.org/wiki/Astronomy). The choice was quick.
{{/template}}
