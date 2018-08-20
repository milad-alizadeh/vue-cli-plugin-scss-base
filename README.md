# vue-cli-plugin-scss-base

SCSS Base is an opinionated plugin that includes globally used SCSS files to your project. This includes CSS reset, mixins, variables, base styling, animation and utility classes.

All the files are added under `src/scss` in your view project.

The structure is as follows:

* scss
	* animation
	* base
	* mixins
	* utilities
	* variables

The main file `settings.scss` is automatically included in your project using the following config in your `vue.config.js` or the `"vue"` section of your `package.json`. This file includes all the variables and mixins.

```
vue: {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/settings.scss";'
      }
    }
  }
}
```

All the basic CSS files such as reset, animation etc are added to App.vue with the line `@import '@/scss/base.scss';`

Once you install this plugin you can immediately use your SCSS files such as variables and mixins within your project.

```
<template>
  <a class="link" :href="href">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: String
  }
}
</script>

<style lang="scss">
  .link {
    background: $white;
    color: $black;
  }
</style>
```

## Notes

### Using REM
The plugin sets the `<html>` font-size to `62.5%` and `<body>` font-size to `1.6rem`. This enables you to use `rem` unit with easy math so `1rem` will equal to `10px`. You can still use `pixels` or `em` as you normally would. For more information on `rem` you can refer to [this article](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/)


### Media Queries
We recommend taking a mobile first approach in writing your media queries. That means to favour `min-width` over `max-width`. here is an [article](https://zellwk.com/blog/how-to-write-mobile-first-css/) on benefits of this approach.
There's a useful mixin called `breakpoints` already included in this plugin which makes writing media queries less verbos. Here's an example:

```
<style lang="scss">
  .promo {
  	width: 100%;

  	// $medium refers to px values of the min-width and
  	// can be set in scss/varaibles/breakpoints
  	@include breakpoint($medium) {
  		width: 50%;
  	}

  	@include breakpoint($large) {
  		width: 25%;
  	}
  }
</style>
```

the above code is equivalent to this:

```
<style lang="scss">
  .promo {
  	width: 100%;

  	@media screen and (min-width: $medium) {
  		width: 50%;
  	}

  	@media screen and (min-width: $large) {
  		width: 50%;
  	}
  }
</style>
```

### Utility Classes

Sometime you need share styling within your components and you don't want to repeat the the code. This where utility classes come in. You can write your own utility classes `scss/utilities` folder. Once you have include in the `scss/utilities/_utilities.scss` file and you can use it throughout your project. You can either use `@extend` or add it directly to your template


```
<style lang="scss">
  .promo {
  	background: url('@/assets/bg.jpg');

		.label {
			// Only visible to screen readers && search bots
			@extend .u-visually-hidden;
		}
  }
</style>
```
or

```
<template>
  <div class="promo">
    <span class="label u-visually-hidden">This text is only for screen readers</span>
  </div>
</template>
```

## LICENSE
[MIT](https://raw.githubusercontent.com/milad-alizadeh/vue-cli-plugin-scss-base/master/LICENSE)
