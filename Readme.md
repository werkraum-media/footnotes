# wrkrm-footnotes

Displays footnotes in a layer sticked to the footer of a page.


## Install

```
$ npm install werkraum-media/footnotes --save
```

```json
  "dependencies": {
    ...  
    "footnotes": "github:werkraum-media/footnotes"
  }
```


## Usage

```js
// foo.js
const footnotes = require('wrkrm-footnotes');

```


footnotes need to be referenced by an href anchor / id   
footnotes are identified by data attribute: data-toggle="tooltip"

sample:

```html
<a href="#tooltip2" data-toggle="tooltip">[2]</a>
```