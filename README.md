<img width="100" src="http://f.cl.ly/items/2f2R3e1s290h2f0g0J0c/example.png"> Piegress.js
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

## Copyright and license

Copyright 2014 [Caffeina](http://caffeina.co) srl under the [MIT license](LICENSE.md).

<p align="center"><a href="http://caffeina.co" target="_blank" title="Caffeina - Ideas Never Sleep"><img src="https://github.com/CaffeinaLab/BrandResources/blob/master/caffeina-handmade.png?raw=true" align="center" height="65"></a></p>
