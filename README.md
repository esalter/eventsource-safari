Safari Eventsource issue
========================


A repository attempting to demo the issue with Safari.

````
npm install
./node_modules/.bin/webpack ./src.js bundle.js
npm start
````

Now open index.html in Safari and view the developer console.  Only messages from the "native" (real) eventsource will be shown.  If you use Chrome both messages will be shown.
