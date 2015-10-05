{{#template name="Examples"}}
The best way of learning is learning by example, that's why there is an example git [repository](https://github.com/jagi/meteor-astronomy-examples) that you can clone and run to see Astronomy in action. I encourage you to take a look at the code and how integration with form templates is done.

**The Meteor.users collection**

If you want to provide a schema for the `Meteor.users` class then here is a minimal example of such definition. Of course, you could make it more detailed. However, Meteor takes care of checking data validity for the `Meteor.users` collection, so you don't have to do it one more time.

```js
UserProfile = Astro.Class({
  name: 'UserProfile',
  fields: {
    nickname: 'string'
    /* Any other fields you want to be published to the client */
  }
});

User = Astro.Class({
  name: 'User',
  collection: Meteor.users,
  fields: {
    createdAt: 'date',
    emails: {
      type: 'array',
      default: function() {
        return [];
      }
    },
    profile: {
      type: 'object',
      nested: 'UserProfile',
      default: function() {
        return {};
      }
    }
  }
});

if (Meteor.isServer) {
  User.extend({
    fields: {
      services: 'object'
    }
  });
}
```
{{/template}}
