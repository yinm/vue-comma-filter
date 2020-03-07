# vue-comma-filter
Vue.js filter for formatting number into comma separated values.

## Installation

```sh
npm install vue-comma-filter
```

and register in you Vue app

```js
import Vue from "vue";
import VueCommaFilter from "vue-comma-filter";

Vue.use(VueCommaFilter);
```

## Usage

```vue
<template>
  <div>
    <p>{{ 1234567 | comma }}</p> <!-- => 1,234,567 -->
  </div>
</template>
```

## License
MIT