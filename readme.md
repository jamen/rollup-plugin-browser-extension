# rollup-plugin-browser-extension

Rollup plugin for browser extensions.

## Usage

Add the plugin to your Rollup config

```js
import extension from 'rollup-plugin-browser-extension'

export default {
    // ...
    plugins: [
        extension()
    ]
}
```

A `browser` module is added that exports [`chrome`](https://developer.chrome.com/extensions/api_index) APIs, [`browser`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API) APIs, and a `browser` export for any APIs [not added yet](./src/browser-extension.js).

```js
import { browser, runtime, tabs } from 'browser'

runtime.onMessage.addListener(() => {
    // ...
})
```