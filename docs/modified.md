{{#template name="Modified"}}
An Astronomy is aware of a document's state. It knows if a document is new or it's already stored in the database. It also knows what fields have been modified from the last save operation. The `getModfied()` method is responsible for getting modified fields.

```js
var user = Users.findOne();
user.firstName; // "Luke"

/* ... */

user.set('firstName', 'John');
user.getModified(); // Returns {firstName: "John"}
```

The method returns an object of key-value pairs where the key is a field name and the value is a new field value. But what, if we want to retrieve the old values, before the modification? You just have to pass `true` as the first argument of the `getModified` method.

```js
user.getModified(true); // Returns {firstName: "Luke"}
```

**Is document modified?**

You can also check if a document is modified using the `isModified()` method. Remember that it's not a reactive variable.

```js
var user = Users.findOne();
user.isModified(); // false
user.set('firstName', 'John');
user.isModified(); // true
```
{{/template}}
