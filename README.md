# react-combine-providers

In React.js, libraries such as ReactRouter, StyledComponents SSR, ReactHelmet and many others needs Providers in the root of the application. So usually entry file looks like as flying ducks in the sky

<iframe
  src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=base16-light&wt=none&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&code=%2520%2520%2520%2520%253CProvider1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CProvider2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CProvider3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520...%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CApp%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520...%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252FProvider3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252FProvider2%253E%250A%2520%2520%2520%2520%253C%252FProvider1%253E&es=2x&wm=false"
  style="width: 100%; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

```
npm install --save react-combine-providers
```

or

```
yarn install react-combine-providers
```

### Import module

```js
import {combineProviders} from 'react-combine-providers';
```

### Usage



### Real example

### Author

Edvinas pranka

[@epranka](https://twitter.com/epranka)

https://www.kodmina.lt

# License

ISC License

Copyright (c) 2019 Edvinas Pranka(@epranka, https:///www.kodmina.lt)

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
