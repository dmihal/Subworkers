# Subworkers
WebWorkers are awesome! Unfortionately, Google Chrome doesn't support creating subworkers,
[here's the Chromium issue for it](https://code.google.com/p/chromium/issues/detail?id=31666).

This polyfill provides this functionality to Chrome and any other browser that supports WebWorkers,
but not subworkers. This functionality is implemented by creating all subworkers in the context of
the main page and simulating the communication.

## Usage
Using this is easy!

1. Download [`subworkers.js`](https://raw.githubusercontent.com/dmihal/Subworkers/master/subworkers.js)
2. In the document hosting the WebWorkers, include the `subworkers.js` script before any scripts that create WebWorkers.

   ``` html
   <script src="subworkers.js"></script>
   ```

3. In the code for any WebWorker that will have a subworker, you also need to include `subworkers.js`.

   ``` javascript
   importScripts("subworkers.js");
   ```

That's it! WebWorkers now work the way you would expect!

### With NPM

1. Install subworkers.js by running `npm install -s subworkers`
2. Import the library in all scripts

``` javascript
require('subworkers'); // CommonJS
// or
import 'subworkers'; // ES2015+
```

## License
This project is released under the MIT License.
