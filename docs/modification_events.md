{{#template name="ModificationEvents"}}
There are several storage events that are triggered on a document modification. Methods that modifies a document are: `set()`, `inc()`, `push()` and `pop()`. Let's take a look at what events are triggered on what operation and in what order.

The `set()` method:

- `beforeChange`
- `beforeSet`
- `afterSet`
- `afterChange`

The `inc()` method:

- `beforeChange`
- `beforeInc`
- `afterInc`
- `afterChange`

The `push()` method:

- `beforeChange`
- `beforePush`
- `afterPush`
- `afterChange`

The `pop()` method:

- `beforeChange`
- `beforePop`
- `afterPop`
- `afterChange`

You can prevent each operation using the `preventDefault()` method on the event object passed to the event handler as the first argument.

**Data passed to the event object**

Event objects passed to the modification events handlers contain the `data` property that stores additional information about the event. Let's examine what that holds each event object.

The `set()` method:

- `e.data.fieldName` - a field name that is being modified
- `e.data.fieldValue` - a field value being set

The `inc()` method:

- `e.data.fieldName` - a field name that is being modified
- `e.data.incValue` - an incrementation value of a modified field

The `push()` method:

- `e.data.fieldName` - a field name that is being modified
- `e.data.pushedValue` - a value being pushed into the array

The `pop()` method:

- `e.data.fieldName` - a field name that is being modified
- `e.data.popItem` - a value being popped from the array
{{/template}}
