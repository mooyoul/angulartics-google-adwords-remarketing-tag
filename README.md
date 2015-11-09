## angulartics-google-adwords-remarketing-tag

[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Bower version][bower-image]][bower-url] [![Dependencies status][dep-status-image]][dep-status-url] [![MIT license][license-image]][license-url] [![Join the Slack chat][slack-image]][slack-url]

Google Adwords Remarketing Tag plugin for [Angulartics](http://github.com/luisfarzati/angulartics).

## Install

First make sure you've read installation and setup instructions for [Angulartics](https://github.com/luisfarzati/angulartics#install).

Then you can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angulartics-google-adwords-remarketing-tag
```

Then add `angulartics.google.adwords.remarketing.tag` as a dependency for your app:

```javascript
require('angulartics')

angular.module('myApp', [
  'angulartics', 
  require('angulartics-google-adwords-remarketing-tag')
]);
```

> Please note that core Angulartics doesn't export the name yet, but it will once we move it into [the new organization](http://github.com/angulartics).

### bower

```shell
bower install angulartics-google-adwords-remarketing-tag
```

Add the `<script>` to your `index.html`:

```html
<script src="/bower_components/angulartics-google-adwords-remarketing-tag/dist/angulartics-google-adwords-remarketing-tag.min.js"></script>
```

Then add `angulartics.google.adwords.remarketing.tag` as a dependency for your app:

```javascript
angular.module('myApp', [
  'angulartics', 
  'angulartics.google.adwords.remarketing.tag'
]);
```

## Consider using Asynchronous verison of Google Adwords Remarketing Tag

By default, Google Adwords Remarketing Tag does an automatic pageview hit on page load,
And it does not supports Multiple pageviews.

If you want to track PageView correctly, Please consider using async version of Google Adwords Remarketing Tag Script:

```html
    <script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion_async.js" charset="utf-8"></script>
```

## Changes in the Google Adwords Remarketing Tag snippet

Please set your conversion id by setting `_gart_conversion_id` on window object:

```js
  <script type="text/javascript">
    window._gart_conversion_id = 989712485; // Required
  </script>
  <script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion_async.js" charset="utf-8"></script>
```

Done. Open your app, browse across the different routes and check [the Audiences page in Google Adwords](https://support.google.com/adwords/answer/2454064) to see the hits.

## Documentation

Documentation is available on the [Angulartics site](http://luisfarzati.github.io/angulartics).

## Development

```shell
npm run build
```

## License

[MIT](LICENSE)
See full license on [mooyoul.mit-license.org](http://mooyoul.mit-license.org/)

[npm-image]: https://img.shields.io/npm/v/angulartics-google-adwords-remarketing-tag.svg
[npm-url]: https://npmjs.org/package/angulartics-google-adwords-remarketing-tag
[npm-downloads-image]: https://img.shields.io/npm/dm/angulartics-google-adwords-remarketing-tag.svg
[npm-downloads-url]: https://npmjs.org/package/angulartics-google-adwords-remarketing-tag
[bower-image]: https://img.shields.io/bower/v/angulartics-google-adwords-remarketing-tag.svg
[bower-url]: http://bower.io/search/?q=angulartics-google-adwords-remarketing-tag
[dep-status-image]: https://img.shields.io/david/mooyoul/angulartics-google-adwords-remarketing-tag.svg
[dep-status-url]: https://david-dm.org/mooyoul/angulartics-google-adwords-remarketing-tag
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: http://mooyoul.mit-license.org/
[slack-image]: https://angulartics.herokuapp.com/badge.svg
[slack-url]: https://angulartics.herokuapp.com