{{#template name="SizeValidators"}}
**length**

```js
Validators.length(size);
```

The `length` validator takes a number as the first argument and its function is to check whether the length of a value of a field is exactly `size` characters long. Where `size` is the first argument of the validator. It can also works with fields of the `Array` type. In such situation, it checks number of elements in an array.

**minLength**

```js
Validators.minLength(size);
```

The `minLength` validator takes a number as the first argument and its function is to check whether the length of a value of a field is at least `size` characters long. Where `size` is the first argument of the validator. It can also works with fields of the `Array` type. In such situation, it checks number of elements in an array.

**maxLength**

```js
Validators.maxLength(size);
```

The `maxLength` validator takes a number as the first argument and its function is to check whether the length of a value of a field is at most `size` characters long. Where `size` is the first argument of the validator. It can also works with fields of the `Array` type. In such situation, it checks number of elements in an array.

**gt**

```js
Validators.gt(size);
```

The `gt` validator takes a number as the first argument and its function is to check whether a value of a field is greater than the `size`. Where `size` is the first argument of the validator. It can also work with fields of `Date` type and other types that are comparable with numbers.

**gte**

```js
Validators.gte(size);
```

The `gte` validator takes a number as the first argument and its function is to check whether a value of a field is greater than or equal the `size`. Where `size` is the first argument of the validator. It can also work with fields of `Date` type and other types that are comparable with numbers.

**lt**

```js
Validators.lt(size);
```

The `lt` validator takes a number as the first argument and its function is to check whether a value of a field is less than the `size`. Where `size` is the first argument of the validator. It can also work with fields of `Date` type and other types that are comparable with numbers.

**lte**

```js
Validators.lte(size);
```

The `lte` validator takes a number as the first argument and its function is to check whether a value of a field is less than or equal the `size`. Where `size` is the first argument of the validator. It can also work with fields of `Date` type and other types that are comparable with numbers.
{{/template}}
