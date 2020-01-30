<template lang="html">
  <header class="global">
    <a href="https://www.pixely.com"
      ><div class="icon-arrow_back"></div>
      <span class="is-hidden-mobile">Homepage</span></a
    >
    <a href="https://www.pixely.com" class="abrand"
      ><div class="brand">
        <div>
          <!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="36px"
            height="48px"
            viewBox="0 0 36 48"
            style="enable-background:new 0 0 36 48;"
            xml:space="preserve"
          >
            <style type="text/css">
              .st3 {
                fill: #ffffff;
              }
            </style>
            <g>
              <polygon
                class="st3"
                points="24,0 12,0 0,0 0,12 0,24 12,24 12,12 24,12 24,24 12,24 12,36 24,36 36,36 36,24 36,12 36,0 	"
              />
              <rect y="36" class="st3" width="12" height="12" />
            </g>
          </svg>
        </div>
      </div>
    </a>
    <ul>
      <li>
        <a
          href="https://pixely.sitesandservices.com/login"
          class="button is-rounded is-primary"
          >login</a
        >
      </li>
    </ul>
  </header>
</template>

<style lang="scss">
@import "../assets/scss/mixins";
header {
  &.global {
    height: 67px;
    width: 100%;
    background-color: $light;
    position: relative;
    z-index: 1;
    @include flexcenter;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
    @include transall;
    padding: 0 28px;
    @include tablet {
      height: 85px;
      @include transall;
    }
    @include desktop {
      justify-content: space-between;
    }

    .icon-arrow_back {
      margin-right: 5px;
      position: absolute;
      left: 4px;
      transition: transform 0.2s linear;
      transform: translateX(0px);
      font-weight: lighter;
      font-size: 21px;
      margin-top: 0;
      @include tablet {
        left: 0;
        margin-top: 0;
      }
    }

    & > a {
      text-transform: uppercase;
      position: absolute;
      left: 28px;
      color: $darker-grey;
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 0.04em;
      @include transall;
      display: flex;
      align-items: center;
      &:hover {
        @include transall;
        color: $dark;
        .arrow-left.icon {
          color: $dark;
        }
      }
      &:first-child {
        left: 10px;
        padding-left: 35px;
        &:hover {
          .icon-arrow_back {
            transform: translateX(4px);
            transition: transform 0.2s linear;
          }
        }
      }
      @include desktop {
        &:first-child {
          left: 0;
        }
        position: relative;
        left: 0;
        display: flex;
        align-items: center;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      margin-left: auto;
      display: none;
      @media screen and (min-width: 500px) {
        display: flex;
      }
      li {
        margin: 0 15px;
        display: flex;
        align-items: center;
        &:last-child {
          margin-right: 0;
        }
        a {
          text-transform: uppercase;
          color: $darker-grey;
          font-weight: bold;
          font-size: 14px;
          letter-spacing: 0.04em;
          @include transall;
          &:hover {
            @include transall;
            color: $dark;
          }
          &.button {
            height: 46px;
            border: 0;
            @include transall;
            &:hover {
              background-color: #2271ff;
              @include transall;
              box-shadow: none;
              color: $light;
            }
          }
        }
      }
    }
    .abrand {
      position: absolute;
      left: 50%;
      margin-left: -23px;
    }
    .brand {
      & > div {
        background-color: $blue;
        width: 46px;
        height: 46px;
        @include flexcenter;
        svg {
          transform: scale(0.42);
          fill: $light;
          backface-visibility: hidden;
          -webkit-font-smoothing: subpixel-antialiased;
          shape-rendering: optimizeSpeed;
        }
      }
      p {
        margin: 0;
        text-transform: uppercase;
      }
    }
  }
  .arrow-left.icon {
    @include transall;
    color: #999999;
    margin: 0 10px 0 0;
    width: 16px;
    height: 1px;
    background-color: currentColor;
    top: -4px;
    @include desktop {
      top: 0;
    }
  }
  .arrow-left.icon:before {
    content: "";
    position: relative;
    left: -2px;
    top: -0.1px;
    width: 10px;
    height: 10px;
    border-top: 2px solid currentColor;
    border-right: 2px solid currentColor;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
}
</style>
