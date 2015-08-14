{{#template name='Introduction'}}
## Introduction

When fetching objects from Mongo Collections, you get simple JavaScript objects without any logic. You have to implement logic, validate attributes, check what fields have changed, save only modified fields, transform field types when reading data from forms etc. in every place you are using them. Wouldn't it be great if you could write code just like below?

```js
var post = Posts.findOne();
// Increase votes count by one.
post.voteUp();
// Auto convert a string input value to a number.
post.set('count', tmpl.find('input[name=count]').value);
// Check if all attributes are valid.
if (post.validate()) {
  // Update document with only fields that have changed.
  post.save();
}
```

And that's exactly what Astronomy is doing. Here's what the above would look like without Astronomy:

```js
var post = Posts.findOne();
// Access fields manually without the possibility of taking extra action.
// You have to perform an extra action in every place you are increasing the vote count.
post.votes++;
// Manual type conversion. You have to remember to do this every time you update fields.
post.count = parseInt(tmpl.find('input[name=count]').value, 10);
// Implement custom validation logic every time.
if (post.count > post.votes) {
  // Implement an error message system.
  throw new Error("Votes field's value has to be at least equal " + post.count);
} else {
  // Detect what fields have change and update only those.
  Posts.update({
    _id: post._id
  }, {
    $set: {
      votes: post.votes,
      count: post.count
    }
  });
}
```

Which approach is simpler? I think the answer is obvious :).
{{/template}}
