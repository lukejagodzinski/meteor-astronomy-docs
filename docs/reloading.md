{{#template name="Reloading"}}
When you fetch a document outside of the reactive context it won't be reactively updated. When you want to update a document to its current state you have to reload it using the `reload()` method.

```js
var post = Posts.findOne(); // Get document outside of the reactive context.
post.reload();  // Update a document to its current state.
```
{{/template}}
