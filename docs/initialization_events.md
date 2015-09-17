{{#template name="InitializationEvents"}}
There are two events that are triggered on a document initialization:

- `beforeInit`
- `afterInit`

The `beforeInit` event is triggered just after a new document instance is created. During this event all document's fields are empty and you shouldn't set or modify any field value. This event is mostly used by behaviors and modules.

The `afterInit` event is triggered after a document is fully created and filled with data. You can freely modify fields' values and do other changes.
{{/template}}
