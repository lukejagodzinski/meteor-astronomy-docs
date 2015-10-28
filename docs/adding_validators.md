{{#template name="AddingValidators"}}
There are two ways of adding validators to the class. You can define them on the class or within the class's field definitions. Let's take a look at an example of both.

**Validators on the class level**

Validators on the class level have to be defined under the `validators` property in the class schema.

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  validators: {
    firstName: Validators.minLength(3)
  }
});
```

As you can see, we've added the `minLength` validator for the `firstName` field. Read on to learn more about available validators and their options.

**Validators on the field level**

You can also define validators within a field definition to improve readability. To do this you have to define the validator using the `validator` property in the field definition.

```js
User = Astro.Class({
  name: 'User',
  /* ... */
  fields: {
    firstName: {
      type: 'string',
      validator: Validators.minLength(3)
    }
  }
});
```

*NOTICE: In a field definition the correct property name is `validator` (singular) and in the class definition it `validators` (plural).*

**Passing array of validators**

For the `validators` or `validator` property you can pass array of validators. When using an array of validators, it will be replaced with the `and` validator. The `and` validator means that all sub-validators have to pass their respective tests for the field's value to be considered valid. The two following examples are equivalent:

The `and` validator:

```js
User = Astro.Class({
  name: 'User',
  /* */
  validators: {
    firstName: Validators.and([
      Validators.required(),
      Validators.string()
    ])
  }
});
```

Array of validators:

```js
User = Astro.Class({
  name: 'User',
  /* */
  validators: {
    firstName: [
      Validators.required(),
      Validators.string()
    ]
  }
});
```

**Reusing validators**

Sometimes you may notice that you repeat the same set of validators over and over again. Use this pattern instead:

```js
var reqStrMin3 = Validators.and([
  Validators.required(),
  Validators.string(),
  Validators.minLength(3)
]);

User = Astro.Class({
  name: 'User',
  /* */
  validators: {
    firstName: reqStrMin3,
    lastName: reqStrMin3
  }
});
```

**Types of validator params**

Most of the validators take a param as the first argument. The param may differ from validator to validator. Let's examine some cases.

Array of validators. The `and` and `or` validators are the only two predefined validators that take an array of validators as a param. We will write more about them in next sections.

```js
Validators.and([
  Validators.string(),
  Validators.minLength(3)
]);

Validators.or([
  Validators.string(),
  Validators.minLength(3)
]);
```

There are validators that take a single plain value (string, number) as a param. Examples of them include: `minLength`, `equals`, and `contains`. We will write more about them in next sections.

```js
Validators.minLength(3);
Validators.equals('mustBeEqualToThisString');
Validators.contains('mustContainThisString');
```

There are validators that take an array of some values or an object with some validator details. Examples include: `choice`, and `if`. We will write more about them in next sections.

```js
Validators.choice(['value', 'has', 'to', 'be', 'equal', 'one', 'of', 'these']);
Validators.if({
  condition: function() {
    return this.lastName > 5;
  },
  true: Validators.maxLength(10),
  false: Validators.minLenght(2)
});
```

There are also validators that don't take any params. Examples: `string`, `number`, and `boolean`.

**Function as a validator param**

Any validator that accepts a paramter can be a passed function instead of a simple value. In this situation, the validator will use the passed function to calculate what value to use during validation. This very useful when we want to validate one field based off another field's value.

```js
validators: {
  firstName: Validators.string(),
  lastName: Validators.minLength(function() {
    // A value of the "lastName" field has to be at least as long as a value of
    // the "firstName" field.
    return this.firstName.length;
  });
}
```

*NOTICE: It's important to remember that a function param works with every validator that takes a param as the first argument.*
{{/template}}
