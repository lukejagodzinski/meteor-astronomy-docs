{{#template name="SettingAndGettingValues"}}
Every Astronomy class has the setter `set()` and the getter `get()` methods. You should always use the `set()` method to set values. If it goes about the `get()` method, it's good to also use it wherever you can. However, in such places like templates you can access fields directly. Take a look at the example.

```js
// ANTI-EXAMPLE
var user = new User();
user.age = $('#age').value; // WRONG! Never do that!
```

In the example above, we assigned value from the input to the `age` field. The type of the `age` field is `number` and in this situation we assigned string value. It won't be converted to the number. Now, take a look at the correct example.

```js
var user = new User();
user.set('age', $('#age').value);
```

Now, the value will be converted to the number.

The usage of the `get` method is similar.

```js
var user = new User();
user.age; // Permitted but not recommended.
user.get('age'); // It's much better!
```

As said earlier, you can access fields directly in templates.

```html
<div>Age: {{|user.age}}</div>
```
{{/template}}
