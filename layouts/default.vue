<template>
  <main id="application" class="application">
		<Header/>
     <div class="global-content">
		  <nuxt/>
      </div>
    <Footer/>
  </main>
</template>
<script>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins";
html {
  overflow-y: auto;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  &.modal-on {
    overflow: hidden;
    position: fixed;
  }
}
body {
  background-color: $light;
}
.application {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: $grey;
}

.global-content {
  background-color: $grey;
  h1 {
    margin: 0;
  }
}

.button {
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 1.3rem;
  padding-top: 1.3rem;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
  @include transall;
  &.is-primary {
    &:hover {
      @include transall;
      box-shadow: 0 0 0 0.125em rgba($blue, 1);
      background-color: transparent;
      color: $blue;
    }
  }
}

.field:not(:last-child) {
  margin-bottom: 1.75rem;
}

/* latin-ext */
@font-face {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  src: local("Lato Regular"), local("Lato-Regular"),
    url("../static/fonts/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2") format("woff2");
  unicode-range: U + 0100-024f, U + 0259, U + 1-1eff, U + 2020, U + 20a0-20ab,
    U + 20ad-20cf, U + 2113, U + 2c60-2c7f, U + A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  src: local("Lato Regular"), local("Lato-Regular"),
    url("../static/fonts/S6uyw4BMUTPHjx4wXiWtFCc.woff2") format("woff2");
  unicode-range: U + 0000-00ff, U + 0131, U + 0152-0153, U + 02bb-02bc, U + 02c6,
    U + 02da, U + 02dc, U + 2000-206f, U + 2074, U + 20ac, U + 2122, U + 2191,
    U + 2193, U + 2212, U + 2215, U + FEFF, U + FFFD;
}
/* latin-ext */
@font-face {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  src: local("Lato Bold"), local("Lato-Bold"),
    url("../static/fonts/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2") format("woff2");
  unicode-range: U + 0100-024f, U + 0259, U + 1-1eff, U + 2020, U + 20a0-20ab,
    U + 20ad-20cf, U + 2113, U + 2c60-2c7f, U + A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  src: local("Lato Bold"), local("Lato-Bold"),
    url("../static/fonts/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2") format("woff2");
  unicode-range: U + 0000-00ff, U + 0131, U + 0152-0153, U + 02bb-02bc, U + 02c6,
    U + 02da, U + 02dc, U + 2000-206f, U + 2074, U + 20ac, U + 2122, U + 2191,
    U + 2193, U + 2212, U + 2215, U + FEFF, U + FFFD;
}

// Font-icon
@font-face {
  font-family: "icomoon";
  src: url("../static/fonts/icomoon.eot?b3rj3q");
  src: url("../static/fonts/icomoon.eot?b3rj3q#iefix")
      format("embedded-opentype"),
    url("../static/fonts/icomoon.ttf?b3rj3q") format("truetype"),
    url("../static/fonts/icomoon.woff?b3rj3q") format("woff"),
    url("../static/fonts/icomoon.svg?b3rj3q#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"],
[class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "icomoon" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  font-size: 24px;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-arrow-down:before {
  content: "\e900";
}
.icon-close:before {
  content: "\e5cd";
}
.icon-help:before {
  content: "\e887";
}
.icon-help_outline:before {
  content: "\e8fd";
}
.icon-highlight_off:before {
  content: "\e888";
}
.icon-info:before {
  content: "\e88e";
}
.icon-info_outline:before {
  content: "\e88f";
}
.icon-visibility:before {
  content: "\e8f4";
}
.icon-visibility_off:before {
  content: "\e8f5";
}
.icon-twitter:before {
  content: "\f099";
}
.icon-facebook:before {
  content: "\f09a";
}
.icon-facebook-f:before {
  content: "\f09a";
}
.icon-linkedin:before {
  content: "\f0e1";
}
.icon-arrow_back:before {
  content: "\e5c4";
}

a {
  @include transall;
  &:hover {
    @include transall;
  }
}

</style>
