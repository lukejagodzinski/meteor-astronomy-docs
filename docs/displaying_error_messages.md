{{#template name="DisplayingErrorMessages"}}
Errors generated on a validation fail can be accessed using a few methods. We can not only get a validation error message but also check if there are any errors and if a given field has a validation error. Let's examine all available functions.

- `doc.hasValidationErrors()` - check if there are any validation errors
- `doc.hasValidationError(fieldName)` - check if there is a validation error for a given field
- `doc.getValidationErrors()` - get all validation errors
- `doc.getValidationError(fieldName)` - get a validation error for a given field

All of these methods are reactive.

The `getValidationErrors()` method returns an object containing key-value pairs where the key is field name and the value is a validation error message.

**Displaying errors in a template**

Getting a validation error message is one thing but displaying it in a template another one that needs explanation. All described methods can be used in a template. Let's take a look at how we can create an input field with a validation error message displayed underneath only when there is any for a given field.

```html
{{|#with user}}
  <input id="firstName" type="text" />
  {{|#if hasValidationError "firstName"}}
    <div class="error">{{|getValidationError "firstName"}}</div>
  {{|/if}}
{{|/with}}
```

**Validation error message for nested fields**

It's important to notice that error messages for nested fields resides inside of the nested fields. So, if we have the `User` class that has the nested `address` field which stores an instance of the `Address` class, then getting error for the `address.city` field would look like in the example below.

```html
{{|#with user}}
  <input id="city" type="text" value="{{|address.city}}" />
  {{|#if address.hasValidationError "city"}}
    <div class="error">{{|address.getValidationError "city"}}</div>
  {{|/if}}
{{|/with}}
```

As you can see, that time we used the `hasValidationError()` method from the `address` field and we passed the `"city"` string as its argument. The same is true if it goes about the `getValidationError()` method.
{{/template}}
