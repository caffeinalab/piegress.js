Piegress.js
========

A jQuery plugin for drawing small pie progress indicators

### Demo
https://codepen.io/lastguest/pen/qEbQpG

### Options

Key  | Description | Default
------------- | ------------- |  -------
`value`  | The starting value of progress indicator | 0
`size`   | The size in pixels of the widget | 50 (px)
`color`  | The base color of the widget (the middle will be in 50% opacity) | black
`speed`  | The animation delay | 8 (ms)

### Example

Inline options:

```html
<span class="loader" data-value="43" data-color="white" data-size="35"></span>
```

```javascript
$(".loader").Piegress();
```

Passing options on init:

```html
<span class="loader"></span>
```

```javascript
$(".loader").Piegress({
  value: 43,
  color: '#fff',
  size: 35
});
```

### Change value

Progress is in range 0-100

```javascript
$(".loader").data('Piegress').setProgress(100 * Math.random());
```
