# react-sort-search-table 

[![npm version](https://badge.fury.io/js/react-sort-search-table.svg)](https://www.npmjs.com/package/react-sort-search-table)
[![Download Count](http://img.shields.io/npm/dm/react-sort-search-table.svg?style=flat)](https://www.npmjs.com/package/react-sort-search-table)

![demo gif](https://github.com/Grace951/react-sort-search-table/raw/master/example/example2/screenshot.png)

React image carousel is a React component for building image galleries and carousels
* Thumbnail navigation configurable
* Fade In/Fade Out
* Autoplay configurable
* Loop configurable
* Prev/Next image

## Live Demo 
Live demo: [`https://grace951.github.io/react-sort-search-table/`](https://grace951.github.io/react-sort-search-table/)



### Example
Need more example? See [`examples`](https://github.com/Grace951/react-sort-search-table/tree/master/example)
```js
import { render } from 'react-dom';
import React from 'react';
import Carousel from 'react-sort-search-table';

let images = [
	'/img/landing1.jpg',
	'/img/landing2.jpg',
	'/img/landing3.jpg',
	'/img/landing4.jpg',
	'/img/landing5.jpg'
];

render(<div className="my-carousel">
			<Carousel images={images} 
						thumb={true}
						loop={true}
						autoplay={3000}/>
		</div>, document.getElementById("app"))
		
```

# Props

* `thumb`: Boolean, default `true`
    * thumbnail navigation
* `loop`: Boolean, default `true`
  * infinite sliding
* `image`: Array, default `[]`
   * source of images to show
* `autoplay`: Number, default `3000`
   * add this prop to enable autoplay, the value is set to slide interval

# Notes
* Feel free to contribute and or provide feedback!   

# Build the example locally

```
git clone https://github.com/Grace951/react-sort-search-table.git
cd example/example2
npm install
npm start
```

Then open [`localhost:3000`](http://localhost:3000) in a browser.


# License

MIT
