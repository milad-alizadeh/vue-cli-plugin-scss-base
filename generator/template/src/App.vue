---
extend: '@vue/cli-service/generator/template/src/App.vue'
replace: !!js/regexp /<style[^]*?<\/style>/
---

<style lang="scss">
  @import '@/scss/base.scss';
</style>
