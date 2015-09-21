{{#template name="Changelog"}}
**1.0.0-rc.1 (2015-09-16)**

- [Nested classes/fields](#nested-fields)
- [Transient fields](#transient-fields)
- [Immutable fields](#immutable-fields)
- Optional option
- Modification methods
  - [push](#push)
  - [pop](#pop)
  - [inc](#inc)
- Changes in parsing values
- Change the way how constructor works
- Selective saving of fields
- [Changes in how the "get()" method works](#get)
- [The "isModified()" method](#modified)
- [Direct database access](#direct-collection-access)
- Events
  - `before/afterInit`
  - `before/afterChange`
  - `before/afterPush`
  - `before/afterPop`
  - `before/afterInc`
  - `initDefinition`
  - `before/afterFind`
  - Stopping propagation in modification methods
- [A new way of inheriting from a class](#inheritance)
- [A new way of extending a class](#extending-class)
- Validation
  - The `validateAll()` method was removed and replaced with the `validate(false)` method (notice that the `false` value was passed as the first argument)
- Validators
  - `if`
  - `switch`
- Integration of the behaviors module. The `behaviors` module was integrated with the core Astronom package and the external module/package will be removed in the future.
- [Changes in behaviors creation](#writing-behaviors)
- The `supportLegacyBrowsers` configuration variable was removed. To support older browsers and simplify the Astronomy code, there was a need for abandoning some features from ES6 that can't be polyfilled. The only change is that you should always use [modification functions](#modifying-documents) to change values of the fields. You shouldn't change them directly.

**0.12.0, 0.12.1 (2015-07-13)**

- Indexes

**0.11.0 (2015-07-01)**

- Support for legacy browsers by using the `Astro.config.supportLegacyBrowsers` flag
- Child classes can have the same amount of fields as a Parent class
- Ability to set the `_id` field on a document's creation

**0.10.0 (2015-05-31)**

- Changed utilities namespace
- Removed automatic setters and getters
- Nested validators
- Changed the way validators are added to the class

**0.9.0 (2015-05-21)**

- Changes in API:
  - `Astro.Module` to `Astro.createModule`
  - `Astro.Type` to `Astro.createType`
  - `Astro.Behavior` to `Astro.createBehavior`
  - `Astro.Validator` to `Astro.createValidator`
  - `Astro.modules` - list of all added modules
  - `Astro.classes` - list of all created classes
  - `Astro.types` - list of all types
  - `Astro.validators` or `Validators` - list of all added / created validators
  - `Astro.behaviors` - list of all added behaviors

**0.8.0 (2015-05-17)**

- Relations
- Moving all methods from Schema to Class

**0.7.0 (2015-05-13)**

- EJSON-ification of Astronomy objects

**0.6.1 (2015-05-10)**

- Rewrite events system and introduce events propagation
- Rename validation helpers

**0.6.0 (2015-05-09)**

- Global events system

```js
Astro.eventManager.on('validationerror', function(e) {
  return 'Custom error message';
});
```

**0.5.1 (2015-05-09)**

- Better modified fields detection

**0.4.0 (2015-05-07)**

- New events system

**0.4.0 (2015-04-29)**

- The field type definition in the form of string instead casting function.

```js
// Before.
Post = Astro.Class({
  /* ... */
  fields: {
    title: {
      type: String, // Change.
      default: ''
    }
  }
});

// After.
Post = Astro.Class({
  /* ... */
  fields: {
    title: {
      type: 'string', // Change.
      default: ''
    }
  }
});
```

- Documents transformation into class instances is now set to `true` by default.

```js
// Before
Post = Astro.Class({
  /* ... */
  transform: true
});

// After
Post = Astro.Class({
  /* ... */
  // Don't have to write "transform: true" anymore.
});

```
{{/template}}
