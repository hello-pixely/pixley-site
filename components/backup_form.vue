<template lang="html">
 <section class="signup-form">


    <h1>Download your site?</h1>
    <h4>Rest easy knowing backups are taken nightly and stored up to 30 days</h4>

<!-- Begin MailChimp Signup Form -->

<form @submit.prevent="validateBeforeSubmit" action="https://hellopixely.us12.list-manage.com/subscribe/post-json?u=1e2d80dc140b399856bb9e8c7&amp;id=317a5c4a65&c=?" method="get" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="sign-up-form validate" target="_blank" novalidate>

<img src="~/static/team.jpg" alt="Hello Pixely">

<h3>Your backup will be sent to your email address</h3>

<div class="field">
    <div class="control has-tooltip">
        <label for="EMAIL">Your email</label>
         <div class="is-primary tooltip is-tooltip-bottom is-tooltip-multiline pxl-tip" data-tooltip="Your backup will be sent to the email address listed in your Pixely account.">
            <div class="icon-help_outline"></div>
        </div>
        <input v-model="email" data-vv-validate-on="change" v-validate="{ required: true, email }" name="EMAIL" type="email" :class="{'input': true, 'is-danger': errors.has('EMAIL') }" class="input is-medium email required" placeholder="Enter your email address">
        <i v-show="errors.has('EMAIL')" class="fa fa-warning"></i>
        <span v-show="errors.has('EMAIL')" class="help is-danger">{{ errors.first('EMAIL') }}</span>
    </div>
</div>

<div class="field">
    <div class="control has-tooltip">
        <label for="INPUTSITEN">Site's name?</label>
        <div class="is-primary tooltip is-tooltip-bottom is-tooltip-multiline pxl-tip" data-tooltip="This is the name for your site you want to restore or download your backup.">
            <div class="icon-help_outline"></div>
        </div>
        <input name="INPUTSITEN" v-model="inputSiteName" data-vv-validate-on="change" v-validate="{ required: true, min:2, regex:/^[A-Za-z0-9- ]+$/}" :class="{'input': true, 'is-danger': errors.has('INPUTSITEN') }" class="input is-medium" type="text" placeholder="Enter your site's name" id="mce-INPUTSITEN">
        <i v-show="errors.has('INPUTSITEN')" class="fa fa-warning"></i>
        <span v-show="errors.has('INPUTSITEN')" class="help is-danger">{{ errors.first('INPUTSITEN') }}</span>
    </div>
</div>

<div class="field">
    <div class="control input-domain-wrapper">
        <label for="input-domain">Backups</label>

       <div class="custom-select">
        <!-- <span class="icon-arrow-down"></span> -->
        <select name="BACKUP" id="mce-BACKUP">
         <option selected>Latest</option>
         <option selected>Latest</option>
         <option>{{ moment().subtract(1, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(2, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(3, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(4, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(5, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(6, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(7, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(8, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(9, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(10, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(11, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(12, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(13, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(14, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(15, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(16, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(17, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(18, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(19, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(20, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(21, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(22, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(23, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(24, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(25, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(26, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(27, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(28, "days").format("dddd, MMMM Do YYYY") }}</option>
         <option>{{ moment().subtract(29, "days").format("dddd, MMMM Do YYYY") }}</option>
        </select>
      </div>
    </div>
</div>

<p class="footnote">Our backups don’t include the default WordPress files, only the wp-content folder, your database, and anything else unique to your site.</p>


    <div class="columns">
        <div class="column">
            <div class="submit-button-wrapper">
                <button type="submit" id="mc-embedded-subscribe" class="button is-rounded is-primary signup-form-submit">
                    <span>Submit </span>
                </button>
                <div class="loader"></div>
                 <div class="checkmark" width="70" height="70"></div>

                <svg class="cross" width="70" height="70">
                    <path d="m35,35l-9.3,-9.3" />
                    <path d="m35,35l9.3,9.3" />
                    <path d="m35,35l-9.3,9.3" />
                    <path d="m35,35l9.3,-9.3" />
                </svg>
            </div>
        </div>
    </div>

    <p class="kaotic">Opps!!! Something went wrong, please try again later.</p>
	
    
</form>
    

    <!-- Success Modal -->
    <section>
    <div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <div class="brand">
        <!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="36px" height="48px" viewBox="0 0 36 48" style="enable-background:new 0 0 36 48;" xml:space="preserve">
        <style type="text/css">
          .st0{fill:#FFFFFF;}
        </style>
        <g>
          <polygon class="st0" points="24,0 12,0 0,0 0,12 0,24 12,24 12,12 24,12 24,24 12,24 12,36 24,36 36,36 36,24 36,12 36,0 	"/>
          <rect y="36" class="st0" width="12" height="12"/>
        </g>
        </svg>
       </div>
      <button class="delete" aria-label="close"><span class="icon-close"></span></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
        <h1>Success!</h1>
        <h2>Your site has been queued for deletion, pending email confirmation.</h2>
        <!-- <h3>Let your friends know about <span>Pixely</span>, and your next month will be absolutely <span>FREE!</span></h3> -->
        <!-- <div class="group-button"> 
          <button class="button is-primary is-rounded facebook" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent('https://pixely.com'),'facebook-share-dialog','width=626,height=436'); return false;"><span class="is-hidden-mobile">Facebook</span><span class="icon-facebook"></span></button>
          <button class="button is-primary is-rounded linkedin" onclick="window.open('https://www.linkedin.com/shareArticle?mini=true&url=https%3A//pixely.com/&title=Hello%20Pixely&summary=Hosting%20with%20class&source=','_blank','toolbar=yes,scrollbars=yes,resizable=yes,width=400,height=400'); return false;"><span class="is-hidden-mobile">Linkedin</span><span class="icon-linkedin"></span></button>
          <button class="button is-primary is-rounded twitter" onclick="window.open('http://twitter.com/share?text=Welcome to Pixely&url=https://pixely.com&hashtags=Pixely,Hosting,SSL,CDN','_blank','toolbar=yes,scrollbars=yes,resizable=yes,width=400,height=400'); return false;"><span class="is-hidden-mobile">Twitter</span><span class="icon-twitter"></span></button>
        </div> -->

    </section>
  </div>
</div>
  </section>

 </section>
</template>
<script>
import Vue from "vue";
const $ = require("jquery");
const moment = require("moment");
const VeeValidate = require("vee-validate");
Vue.use(VeeValidate, {
  fieldsBagName: "vFields",
  dictionary: {
    en: {
      custom: {
        EMAIL: {
          required: "Email is required.",
          email: "Please enter a valid email address."
        },
        INPUTSITEN: {
          required: "Site name is required.",
          min: (field, params) =>
            `Site name must be at least ${params[0]} characters.`,
          regex: (field, params) => `The site name format is invalid.`
        },
        DOMAIN: {
          required: "Domain name format is invalid."
        },
        CURRENTURL: {
          required: "Domain name is required.",
          regex: (field, params) => `Domain name format is invalid.`
        },
        WPPASSWORD: {
          required: "Password is required.",
          min: (field, params) => `Password should not contain space.`,
          regex: (field, params) => `Password should not contain space.`
        },
        WPADMIN: {
          required: "Username is required.",
          min: (field, params) => `Username should not contain space.`,
          alpha_num: (field, params) => `Username should not contain space.`
        }
      }
    }
  }
});
export default {
  name: "signup-form",
  data: () => ({
    moment: moment,
    isOpen: false,
    email: "",
    inputSiteName: "",
    DOMAIN: "",
    CURRENTURL: "",
    WPADMIN: "",
    WPPASSWORD: "",
    checkboxTos: ""
  }),
  methods: {
    resetError() {
      this.errors.clear();
    },
    reset() {
      this.domain = "";
      this.$nextTick(() => {
        this.resetError();
      });
    },
    validateBeforeSubmit() {
      var signUpSuccess = $(".modal");
      var modalBg = document.getElementsByClassName("modal-background");
      var modalCard = document.getElementsByClassName("modal-card");

      function modalOn() {
        TweenMax.to(modalBg, 0.1, {
          onStart: function() {
            signUpSuccess.addClass("is-active");
            $("html").addClass("modal-on");
          },
          display: "block",
          opacity: 1,
          visibility: "visible",
          onComplete: function() {
            TweenMax.to(modalCard, 0.1, {
              scale: 1,
              opacity: 1
            });
          }
        });
      }

      function modalOff() {
        TweenMax.to(modalCard, 0.1, {
          scale: 0.7,
          opacity: 0,
          onComplete: function() {
            TweenMax.to(modalBg, 0.1, {
              opacity: 0,
              visibility: "invisible",
              onComplete: function() {
                TweenMax.to(signUpSuccess, 0.1, {
                  delay: 0.1,
                  className: "-=is-active"
                });
                $("html").removeClass("modal-on");
              }
            });
          }
        });
      }
      $(".modal-background").on("click", function() {
        modalOff();
      });
      $(".delete").on("click", function() {
        modalOff();
      });

      function toggleSuccess() {
        $(".submit-button-wrapper").removeClass("processing");
        $(".submit-button-wrapper").addClass("success");
      }

      function toggleError() {
        $(".submit-button-wrapper").removeClass("processing");
        $(".submit-button-wrapper").addClass("error");
      }

      function toggleReset() {
        $(".submit-button-wrapper").removeClass("processing");
        $(".submit-button-wrapper").removeClass("error");
        $(".submit-button-wrapper").removeClass("success");
      }

      function resetTos() {
        $(".tos-check").addClass("reset");
      }

      function register($form) {
        $.ajax({
          type: $form.attr("method"),
          url: $form.attr("action"),
          data: $form.serialize(),
          cache: false,
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          error: function(err) {
            alert("not working");
          },
          success: function(data) {
            if (data.result === "success") {
              console.log("Welcome to Pixely");
            } else {
              console.log("Oh!!! Sugar!");
              $(".kaotic").show();
            }
          }
        });
      }

      this.$validator.validateAll().then(result => {
        $(".submit-button-wrapper").addClass("processing");
        if (result) {
          // eslint-disable-next-line
          setTimeout(toggleSuccess, 2000);
          setTimeout(function() {
            modalOn();
            $(".progress-button button").css("pointer-events", "auto");
            register($("#mc-embedded-subscribe-form"));
            resetTos();
            document.getElementById("sign-up-form").reset();
            console.log("form success");
          }, 2500);
          return;
        } else {
          setTimeout(toggleError, 2000);
          setTimeout(function() {
            $(".progress-button button").css("pointer-events", "unset");
            toggleReset();
          }, 4000);
          console.log("form Failure");
        }
      });
    }
  },
  mounted: function() {
    (function($) {
      window.fnames = new Array();
      window.ftypes = new Array();
      fnames[0] = "EMAIL";
      ftypes[0] = "email";
      fnames[1] = "INPUTSITEN";
      ftypes[1] = "text";
      fnames[2] = "DOMAIN";
      ftypes[2] = "text";
      fnames[3] = "WPADMIN";
      ftypes[3] = "text";
      fnames[4] = "WPPASSWORD";
      ftypes[4] = "text";
    })($);

    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select", "icon-arrow-down");
    for (i = 0; i < x.length; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
          /*when an item is clicked, update the original select box,
        and the selected item:*/
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }
    function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document,
  except the current select box:*/
      var x,
        y,
        i,
        arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i);
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }
    /*if the user clicks anywhere outside the select box,
then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);

    // tmp

    // var signUpSuccess = $(".modal");
    // var modalBg = document.getElementsByClassName("modal-background");
    // var modalCard = document.getElementsByClassName("modal-card");

    // function modalOn() {
    //   TweenMax.to(modalBg, 0.1, {
    //     onStart: function() {
    //       signUpSuccess.addClass("is-active");
    //       $("html").addClass("modal-on");
    //     },
    //     display: "block",
    //     opacity: 1,
    //     visibility: "visible",
    //     onComplete: function() {
    //       TweenMax.to(modalCard, 0.1, {
    //         scale: 1,
    //         opacity: 1
    //       });
    //     }
    //   });
    // }

    // modalOn();

    // Host Migration

    function hostMigration() {
      if ($(".mig-yes").is(":checked")) {
        $(".migration-info").addClass("active");
        $(".hiden-block-is-now").addClass("active");
        $(".hiden-block-is-not").addClass("active");
      } else {
        $(".migration-info").removeClass("active");
        $(".hiden-block-is-now").removeClass("active");
        $(".hiden-block-is-not").removeClass("active");
      }
    }

    $(".migration").on("click", function() {
      hostMigration();
    });

    var $mcj = $.noConflict(true);
    $(".tooltip").click(function(e) {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).addClass("inactive");
      } else {
        $(this).addClass("active");
        $(this).removeClass("inactive");
      }
    });

    $(".sign-up-form").click(function(e) {
      if ($(e.target).closest(".tooltip").length > 0) {
        return false;
        console.log("diclick");
      }
      if ($(".tooltip").hasClass("active")) {
        $(this).removeClass("active");
        $(this).addClass("inactive");
        console.log("click");
      }
    });

    function showHidePass() {
      if ($(".password").attr("type") == "password") {
        $(".password").attr("type", "text");
        $(".showhidepassword").toggleClass("showit");
      } else {
        $(".password").attr("type", "password");
        $(".showhidepassword").removeClass("showit");
      }
    }

    $(document).on("click", ".showhidepassword", function(e) {
      e.preventDefault();
      showHidePass();
    });

    function tosReset() {
      if ($(".tos-check").hasClass("reset")) {
        $(".tos-check").removeClass("reset");
      }
    }

    $(document).on("click", ".tos-check", function() {
      tosReset();
    });

    $(document).on("click", ".modal.is-active .delete", function() {
      location.reload();
    });

    function isTouchDevice() {
      return window.ontouchstart !== undefined;
    }
    // console.log(isTouchDevice());
    if (isTouchDevice() == true) {
      var elems = document.querySelectorAll("div");
      [].forEach.call(elems, function(el) {
        el.classList.remove("dk");
      });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/mixins";

header.global > a:first-child {
  display: none;
}

.custom-select {
  position: relative;
  font-family: Arial;
  width: 100%;
  .icon-arrow-down {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -12px;
  }
}
.custom-select select {
  display: none; /*hide original SELECT element:*/
}
.select-selected {
  font-size: 0.9rem !important;
  padding-left: 1rem;
  border-radius: 5px;
  background-color: white;
  color: #363636;
  border: 1px solid #dbdbdb;
  height: 60px;
  display: flex;
  align-items: center;
  @include transall;
  &:hover {
    border-color: #b5b5b5;
    @include transall;
    cursor: pointer;
  }
  &:before {
    position: absolute;
    content: "\e900";
    font-family: "icomoon" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    font-size: 14px;
    right: 1rem;
  }
}
/*style the arrow inside the select element:*/
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}
/*point the arrow upwards when the select box is open (active):*/
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}
/*style the items (options), including the selected item:*/
.select-items div {
  font-size: 14px;
  color: $black;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  height: 60px;
  border-top: 0;
  border-bottom: 0;
  // &:nth-child(1) {
  //   border-top: 1px solid #dbdbdb;
  // }
}

.select-arrow-active {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  // border-bottom: 0;
}

/*style items (options):*/
.select-items {
  position: relative;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border: 1px solid #dbdbdb;
  margin-top: 0;
  background: $light;
  height: 273px;
  overflow-y: auto;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top: 0;
  -webkit-overflow-scrolling: touch;
}
/*hide the items when the select box is closed:*/
.select-hide {
  display: none;
}

.same-as-selected {
  position: relative;
  &:after {
    position: absolute;
    content: "";
    right: 1rem;
    top: 50%;
    width: 8px;
    height: 16px;
    margin-top: -8px;
    border: solid $dark;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  & > div {
    color: $dark;
  }
  @include desktop {
    &:hover {
      &:after {
        border: solid $light;
        border-width: 0 2px 2px 0;
      }
    }
  }
}
@include desktop {
  .select-items div:hover {
    background-color: $black;
    color: $light;
  }
}

.kaotic {
  text-align: center;
  color: $error;
  font-weight: bold;
  font-size: 1.1rem;
  display: none;
  &.sugar {
    display: block;
  }
}

h1 {
  color: $black;
  font-size: 28px;
  @include desktop {
    font-size: 42px;
  }
}

h4 {
  color: #999999;
  max-width: 85%;
  margin: 0 auto;
  font-size: 18px;
  margin-top: 10px;
  line-height: 1.3;
  @include desktop {
    font-size: 24px;
    line-height: 1.5;
    margin-top: 0;
  }
}

h3 {
  font-size: 20px;
  color: $black;
  margin-bottom: 2rem;
  line-height: 1.4;
  text-align: center;
  font-size: 18px;

  @include tablet {
    margin-bottom: 3rem;
    line-height: 1.5;
  }

  @include desktop {
    font-size: 24px;
    text-align: left;
  }
}

p {
  color: $black;
  text-align: left;
  margin-bottom: 30px;
}

.has-tooltip {
  .tooltip {
    position: absolute;
    right: -28px;
    svg {
      position: relative;
      width: 18px;
      height: 18px;
      top: 3px;
      margin-right: 5px;
      &:hover {
        cursor: pointer;
      }
    }
    &.inactive {
      &:before {
        display: none;
      }
    }
  }
  label {
    display: inline-block;
  }
}

.icon-help_outline {
  font-size: 22px;
  color: #dbdbdb;
  @include transall;
  &:hover {
    cursor: pointer;
    @include desktop {
      color: #b5b5b5;
      @include transall;
    }
  }
}

.signup-form {
  text-align: center;
  padding-top: 42px;
  padding-bottom: 50px;
  max-width: 750px;

  .delete::before,
  .delete::after {
    display: none;
  }

  .icon-close {
    font-size: 13px;
    margin-left: -3px;
    @include transall;
    &:hover {
      @include transall;
      color: $blue;
    }
  }

  .delete:active,
  .delete:focus,
  .delete:hover {
    background-color: transparent;
  }

  & > h4 {
    font-style: italic;
    line-height: 1.4;
  }

  .input.is-danger:active {
    box-shadow: none;
  }

  .footnote {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  @include desktop {
    padding-bottom: 150px;
  }

  .checkbox-helper {
    a {
      color: $blue;
      border-bottom: 1px solid $blue;
      padding-bottom: 3px;
      &:hover {
        color: $blue;
        border-bottom: 1px solid $blue;
        padding-bottom: 3px;
      }
    }
  }
  // Tooltip
  .tooltip {
    &.pxl-tip {
      top: 1px;
      right: 0;
      &.is-tooltip-bottom::before {
        left: -475%;
        min-width: 17rem;
        font-size: 14px;
        background-color: $blue;
        color: $light;
        padding: 23px;
        line-height: 22px;
        letter-spacing: 0.5px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.16),
          0 10px 25px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        text-align: center;
        @include tablet {
          min-width: 19rem;
          left: -550%;
          padding: 15px 22px 19px;
        }
      }
      &.is-tooltip-bottom::after {
        display: none;
      }
    }
  }
  .tooltip.is-tooltip-active::before,
  .tooltip:hover::before {
    text-align: left;
    background-color: $light;
    color: $blue;
    box-shadow: 0 0 2px 0 rgba(38, 39, 39, 0.35);
  }

  svg.hero-svg {
    margin: 50px 0 10px 0;
    max-width: 90%;
    @include tablet {
      max-width: 100%;
    }
    @include desktop {
      margin: 80px 0 10px 0;
    }
  }
}
.sign-up-form {
  background-color: $light;
  width: calc(100vw - 20px);
  margin: 20px auto;
  padding: 0 2rem 50px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
  @include transall;

  h3 {
    font-size: 4.5vw;
    @include tablet {
      font-size: 24px;
    }
  }

  label {
    font-size: 1rem;
  }

  // @media screen and (min-width: 414px) {

  @include phablet {
    padding: 0 60px 50px;
  }

  @include tablet {
    width: calc(100vw - 100px);
    max-width: 750px;
    padding: 0 100px 50px;
    @include transall;
  }

  img {
    width: 550px;
  }
  input {
    margin-bottom: 20px;
    box-shadow: none;
    font-size: 0.9rem !important;
    height: 60px;
    padding-left: 1rem;
    border-radius: 5px;
    &[type="radio"] {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }

  .help {
    margin-top: 0;
    &.checkbox-helper {
      font-size: 1rem;
      margin-left: 35px;
      margin-top: 3px;
      @include tablet {
        margin-left: 28px;
        margin-top: 0;
      }
      a {
        color: $blue;
        &:hover {
          color: $blue;
        }
      }
    }
    &.is-danger {
      text-align: right;
      position: absolute;
      right: 0;
      bottom: -10px;
    }
  }

  .wp-new-user-details {
    .column {
      padding: 0rem 0.75rem 1.5rem;
    }
  }
}

.input-domain-wrapper {
  position: relative;
  margin-top: 1.75rem;
}

input {
  @include transition(all 0.1s ease-in);
  &:focus {
    @include transition(all 0.1s ease-in);
    border-color: $black;
  }
  &.is-danger {
    border: 2px solid $error;
    &:focus {
      box-shadow: none !important;
    }
  }
}

label {
  display: block;
  margin-bottom: 0.6rem;
  color: $dark;
  font-size: 0.9rem;
}

hr {
  position: relative;
  height: 1px;
  background-color: #e7e7e7;
  @include desktop {
    left: -50px;
    right: -50%;
    width: calc(100% + 100px);
  }
}

.footnote {
  color: $dark-grey;
  font-size: 0.9rem;
}

.tos-check {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-top: 40px;
  input[type="checkbox"] {
    height: unset;
    margin-bottom: 0;
    margin-right: 10px;
  }
  label {
    margin-bottom: 0;
  }

  .help {
    &.is-danger {
      position: relative;
      bottom: 0;
    }
  }

  &.reset {
    .control input:checked ~ .control__indicator:after {
      display: none;
    }
  }
}

.submit-col {
  .column {
    display: flex;
    justify-content: center;
  }
}

.migration-info {
  @include transall;
  opacity: 0;
  height: 0;
  overflow: hidden;
  &.active {
    opacity: 1;
    height: auto;
    @include transall;
  }
}

.control input.pxl {
  position: absolute;
  z-index: -1;
  opacity: 0;
  // border: 2px solid #e7e7e7 !important;
}

.control__indicator {
  position: absolute;
  top: 2px;
  left: 0;
  height: 26px;
  width: 26px;
  border: 2px solid #e7e7e7;
  border-radius: 4px;
  @include transall;

  @include tablet {
    height: 20px;
    width: 20px;
  }
  &.pxl {
    border: 2px solid #ff3860 !important;
  }
  &.dk {
    &:hover {
      border: 2px solid #b5b5b5;
      @include transall;
      cursor: pointer;
    }
  }
}
.control input:checked ~ .control__indicator {
  border: 2px solid $blue;
}
.control__indicator:checked {
  .control__indicator {
    background-color: $blue;
  }
}

.control input:disabled ~ .control__indicator {
  opacity: 0.6;
  pointer-events: none;
}

.control__indicator:after {
  content: "";
  position: absolute;
  display: none;
}

.control input:checked ~ .control__indicator:after {
  display: block;
}

.control--checkbox .control__indicator:after {
  left: 8px;
  top: 4px;
  width: 6px;
  height: 13px;
  border: solid $blue;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  @include tablet {
    left: 6px;
    top: 4px;
    width: 4px;
    height: 8px;
    border: solid $blue;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
}

.showhidepassword {
  @include transall;
  & > div {
    position: absolute;
    right: 0;
    z-index: 3;
    width: 60px;
    height: 60px;
    @include flexcenter;
    @include transall;
    &:before {
      color: #999;
      @include transall;
    }
    &:hover {
      cursor: pointer;
      &:before {
        color: black;
        @include transall;
      }
    }
  }

  #svg-hide {
    display: none;
  }

  &.showit {
    #svg-hide {
      display: flex;
    }
    #svg-show {
      display: none;
    }
  }
}

.submit-button-wrapper {
  position: relative;
  @include flexcenter;
  margin-top: 70px;
  margin-bottom: 30px;
  .button {
    &.is-primary {
      &.signup-form-submit {
        height: 66px;
        padding: 0 3.3rem !important;
        min-width: 180px;
        letter-spacing: 1px;
        border: 0;
        @include transall;
        &:hover {
          @include transall;
          background-color: #2271ff;
          box-shadow: none;
          color: $light;
        }
        &:focus {
          @include transall;
          box-shadow: none;
        }
      }
    }
  }
  svg.cross,
  svg.checkmark {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    path {
      stroke: $light !important;
      stroke-linecap: round;
      stroke-width: 4;
      -webkit-transition: opacity 0.1s;
      transition: opacity 0.1s;
      opacity: 1;
      -webkit-transition: stroke-dashoffset 0.5s;
      transition: stroke-dashoffset 0.5s;
    }
  }

  .checkmark {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    &:after {
      display: block;
      content: "";
      left: 0;
      top: -6px;
      width: 4px;
      height: 8px;
      border: solid $light;
      border-width: 0 1px 1px 0;
      transform: rotate(45deg) scale(3.2);
      position: absolute;
    }
  }

  .loader,
  .loader:after {
    border-radius: 50%;
    width: 3.5em;
    height: 3.5em;
    visibility: hidden;
    opacity: 0;
  }
  .loader {
    font-size: 10px;
    position: absolute;
    // text-indent: -9999em;
    border-top: 0.3em solid rgba(255, 255, 255, 0.2);
    border-right: 0.3em solid rgba(255, 255, 255, 0.2);
    border-bottom: 0.3em solid rgba(255, 255, 255, 0.2);
    border-left: 0.3em solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
    display: none;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  &.processing {
    .button {
      pointer-events: none;
      span {
        display: none;
      }
    }
    .loader,
    .loader:after {
      visibility: visible;
      opacity: 1;
      display: block;
    }
  }

  &.success {
    .button {
      pointer-events: none;
      background-color: $blue !important;
      border: 0;
      &:focus,
      &:hover {
        box-shadow: none $blue !important;
      }
      span {
        display: none;
      }
    }
    div.checkmark {
      visibility: visible;
      opacity: 1;
    }
  }
  &.error {
    .button {
      pointer-events: none;
      background-color: $error !important;
      border: 0;
      &:focus,
      &:hover {
        box-shadow: none !important;
      }
      span {
        display: none;
      }
    }
    svg.cross {
      visibility: visible;
      opacity: 1;
    }
  }
}

.wp-new-user-details {
  margin-top: 0;
  .has-tooltip {
    label {
      display: block;
    }
  }
}

.migration {
  margin-top: 2rem;
  display: flex;
  width: 50%;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 70px;
    &:last-child {
      margin-right: 0;
    }
    &.dk {
      &:hover {
        [type="radio"]:not(:checked) + label:before {
          content: "";
          border: 2px solid #b5b5b5;
          @include transall;
        }
      }
    }
  }

  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 40px;
    padding-top: 4px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    @include tablet {
      padding-left: 28px;
      padding-top: 0;
    }
  }
  [type="radio"]:checked + label:before,
  [type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 26px;
    height: 26px;
    border: 2px solid #e7e7e7;
    @include transall;
    border-radius: 100%;
    background: #fff;

    @include tablet {
      width: 20px;
      height: 20px;
    }
  }
  [type="radio"]:checked + label:after,
  [type="radio"]:not(:checked) + label:after {
    content: "";
    width: 12px;
    height: 12px;
    background: $blue;
    position: absolute;
    top: 7px;
    left: 7px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;

    @include tablet {
      width: 8px;
      height: 8px;
      top: 6px;
      left: 6px;
    }
  }
  [type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  [type="radio"]:checked + label:before {
    border: 2px solid $blue;
  }
}

// Modal CSS

.delete {
  background-color: transparent;
  transform: scale(2);
  @include transall;
  &:before,
  &:after {
    background-color: $dark-grey;
    border-radius: 4px;
    @include transall;
  }
  &:hover {
    @include transall;
    background-color: transparent;
    &:before,
    &:after {
      @include transall;
      background-color: $blue;
    }
  }
}

.delete::after,
.modal-close::after {
  height: 60%;
}
.delete::before,
.modal-close::before {
  width: 60%;
}
// Custom CSS

.modal-card {
  width: calc(100% - 30px);
  opacity: 0;
  transform: scale(0.7);
  transition: all 0.3s;
  background: $light;
  @include tablet {
    transition: all 0.3s;
    width: 600px;
  }
}

.modal-background {
  display: none;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
}

.modal {
  &.is-active {
    .modal-background {
      display: block;
    }
    .modal-card {
      display: flex;
    }
  }
}

.modal,
.modal-card-head,
.modal-card {
  overflow: visible;
}
.modal-card-head {
  border-bottom: 0;
  display: flex;
  justify-content: flex-end;
  .brand {
    background-color: $blue;
    width: 120px;
    height: 120px;
    @include flexcenter;
    position: absolute;
    left: 50%;
    margin-left: -60px;
    top: -50%;
    margin-top: -30px;
    transform: scale(0.5);
    @include transall;
    @include tablet {
      transform: scale(1);
      @include transall;
    }
  }
}

.modal-card-body {
  @include flexcenter;
  flex-direction: column;
  justify-content: space-around;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  @include tablet {
    [class^="icon-"] {
      margin-left: 10px;
    }
  }

  button {
    @include transall;
    &:hover {
      @include transall;
      opacity: 0.9;
    }
  }

  .group-button {
    width: 85%;
  }

  h1 {
    font-size: 24px;
    margin-top: 0;
    line-height: 1.2;
    padding-bottom: 10px;
    @include tablet {
      margin-top: 30px;
      font-size: 36px;
      max-width: 65%;
    }
  }
  h2 {
    margin: 10px 0 30px;
    font-style: italic;
    color: #999;
    max-width: 90%;
    font-size: 19px;
    line-height: 1.4;
    @include tablet {
      margin: 10px 0 60px;
      line-height: 1.4;
      font-size: 24px;
    }
  }
  h3 {
    margin: 0;
    font-size: 20px;
    text-align: center;
    margin-bottom: 30px;
    max-width: 84%;
    line-height: 1.3;
    @include tablet {
      font-size: 24px;
      margin-bottom: 40px;
      max-width: 70%;
    }
    span {
      font-weight: bold;
    }
  }
}

// Visibility control

.hiden-block-is-now {
  display: none;
  &.active {
    display: block;
  }
}

.hiden-block-is-not {
  display: block;
  &.active {
    display: none;
  }
}

.group-button {
  @include flexcenter;
  justify-content: space-around;
  width: 90%;
  margin-bottom: 30px;
  @include tablet {
    flex-direction: row;
    margin-bottom: 50px;
  }
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 46px;
  box-shadow: none;
  &:focus,
  &:hover {
    box-shadow: none;
  }
  &.is-primary {
    &:focus:not(:active) {
      box-shadow: none;
    }
  }
}

.button {
  &.is-primary {
    &.facebook {
      height: 60px;
      width: 60px;
      background-color: $facebook;
      border: 2px solid $facebook;
      padding: 0 !important;
      font-size: 14px;
      svg {
        @include transall;
        fill: $light;
        transform: scale(1.5);
      }
      &:hover {
        color: $light;
        border: 2px solid $facebook;
        box-shadow: none;
      }
      @include tablet {
        padding-left: 3em !important;
        padding-right: 2.3em !important;
        width: auto;
        svg {
          margin-left: 10px;
          transform: scale(1);
        }
      }
    }

    &.linkedin {
      background-color: $linkedin;
      border: 2px solid $linkedin;
      height: 60px;
      width: 60px;
      padding: 0 !important;
      font-size: 14px;
      svg {
        @include transall;
        fill: $light;
        transform: scale(1.5);
      }
      &:hover {
        color: $light;
        border: 2px solid $linkedin;
        box-shadow: none;
      }
      @include tablet {
        padding-left: 3em !important;
        padding-right: 2.3em !important;
        width: auto;
        svg {
          margin-left: 10px;
          transform: scale(1);
        }
      }
    }

    &.twitter {
      background-color: $twitter;
      border: 2px solid $twitter;
      height: 60px;
      width: 60px;
      padding: 0 !important;
      font-size: 14px;
      svg {
        @include transall;
        fill: $light;
        transform: scale(1.5);
      }
      &:hover {
        color: $light;
        border: 2px solid $twitter;
        box-shadow: none;
      }
      @include tablet {
        padding-left: 3em !important;
        padding-right: 2.3em !important;
        width: auto;
        font-size: 14px;
        svg {
          margin-left: 10px;
          transform: scale(1);
        }
      }
    }
  }
}
</style>