// Dark mode
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

var $ = jQuery.noConflict();

// When the document is ready
$(document).ready(function () {
  console.log("Let's do this!");
  mobileMenu();
  accordionsInit();
  side_tabs(".side-tab-nav button", ".side-tab");
  top_tabs(".tab-nav button");
  searchDropDown();

  search_keys(
    ".post-type-archive-faq .search-filter-input",
    ".search-wrapper",
    ".accordion"
  );

  search_keys(
    ".post-type-archive-education_methods .search-filter-input",
    ".search-wrapper",
    ".method-card"
  );

  search_keys(
    ".page-template-resources .search-filter-input",
    ".search-wrapper",
    ".accordion"
  );

  search_filters(
    ".search-filter-nav-inner button",
    ".search-wrapper",
    ".accordion"
  );

  homepageMenuScroll();
  // resourcesImageSCroll();
  alreadyStartedImageSCroll();
  smooth_scroll();
  // faqPageHash();

  $(".home .stories .articles-wrapper").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    nextArrow:
      '<div class="next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1608 9.55751H6.18578L9.61878 6.12451C9.68547 6.06691 9.73955 5.99615 9.77762 5.91667C9.81569 5.83719 9.83693 5.75071 9.84002 5.66264C9.84312 5.57457 9.82799 5.48681 9.79558 5.40486C9.76318 5.3229 9.7142 5.24853 9.65171 5.18639C9.58923 5.12425 9.51458 5.07568 9.43245 5.04373C9.35032 5.01178 9.26248 4.99714 9.17442 5.00072C9.08637 5.00429 9.00001 5.02602 8.92074 5.06453C8.84148 5.10304 8.77102 5.15751 8.71378 5.22451L4.18878 9.74951C4.15887 9.78012 4.13207 9.81361 4.10878 9.84951C4.09778 9.86551 4.09078 9.88351 4.08078 9.89951C4.0694 9.91896 4.05905 9.93898 4.04978 9.95951C4.04144 9.98107 4.03443 10.0031 4.02878 10.0255C4.02378 10.0435 4.01678 10.0605 4.01278 10.0785C4.00429 10.12 3.99993 10.1622 3.99978 10.2045C3.99977 10.2461 4.00379 10.2877 4.01178 10.3285C4.01178 10.3475 4.02278 10.3655 4.02878 10.3845C4.03424 10.4062 4.04092 10.4276 4.04878 10.4485C4.05865 10.4701 4.06966 10.4911 4.08178 10.5115C4.09078 10.5275 4.09778 10.5435 4.10678 10.5585C4.12999 10.5945 4.15679 10.628 4.18678 10.6585L8.71378 15.1755C8.77288 15.2364 8.8435 15.2849 8.92151 15.3182C8.99953 15.3515 9.08339 15.369 9.16822 15.3696C9.25305 15.3702 9.33716 15.354 9.41565 15.3218C9.49414 15.2896 9.56546 15.2422 9.62544 15.1822C9.68543 15.1222 9.73289 15.0509 9.76507 14.9724C9.79725 14.8939 9.8135 14.8098 9.81288 14.725C9.81226 14.6401 9.79478 14.5563 9.76146 14.4782C9.72814 14.4002 9.67964 14.3296 9.61878 14.2705L6.18578 10.8375H16.1608C16.3305 10.8375 16.4933 10.7701 16.6133 10.6501C16.7334 10.53 16.8008 10.3673 16.8008 10.1975C16.8008 10.0278 16.7334 9.86499 16.6133 9.74497C16.4933 9.62494 16.3305 9.55751 16.1608 9.55751V9.55751Z" fill="currentColor"/></svg></div>',
    prevArrow:
      '<div class="prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1608 9.55751H6.18578L9.61878 6.12451C9.68547 6.06691 9.73955 5.99615 9.77762 5.91667C9.81569 5.83719 9.83693 5.75071 9.84002 5.66264C9.84312 5.57457 9.82799 5.48681 9.79558 5.40486C9.76318 5.3229 9.7142 5.24853 9.65171 5.18639C9.58923 5.12425 9.51458 5.07568 9.43245 5.04373C9.35032 5.01178 9.26248 4.99714 9.17442 5.00072C9.08637 5.00429 9.00001 5.02602 8.92074 5.06453C8.84148 5.10304 8.77102 5.15751 8.71378 5.22451L4.18878 9.74951C4.15887 9.78012 4.13207 9.81361 4.10878 9.84951C4.09778 9.86551 4.09078 9.88351 4.08078 9.89951C4.0694 9.91896 4.05905 9.93898 4.04978 9.95951C4.04144 9.98107 4.03443 10.0031 4.02878 10.0255C4.02378 10.0435 4.01678 10.0605 4.01278 10.0785C4.00429 10.12 3.99993 10.1622 3.99978 10.2045C3.99977 10.2461 4.00379 10.2877 4.01178 10.3285C4.01178 10.3475 4.02278 10.3655 4.02878 10.3845C4.03424 10.4062 4.04092 10.4276 4.04878 10.4485C4.05865 10.4701 4.06966 10.4911 4.08178 10.5115C4.09078 10.5275 4.09778 10.5435 4.10678 10.5585C4.12999 10.5945 4.15679 10.628 4.18678 10.6585L8.71378 15.1755C8.77288 15.2364 8.8435 15.2849 8.92151 15.3182C8.99953 15.3515 9.08339 15.369 9.16822 15.3696C9.25305 15.3702 9.33716 15.354 9.41565 15.3218C9.49414 15.2896 9.56546 15.2422 9.62544 15.1822C9.68543 15.1222 9.73289 15.0509 9.76507 14.9724C9.79725 14.8939 9.8135 14.8098 9.81288 14.725C9.81226 14.6401 9.79478 14.5563 9.76146 14.4782C9.72814 14.4002 9.67964 14.3296 9.61878 14.2705L6.18578 10.8375H16.1608C16.3305 10.8375 16.4933 10.7701 16.6133 10.6501C16.7334 10.53 16.8008 10.3673 16.8008 10.1975C16.8008 10.0278 16.7334 9.86499 16.6133 9.74497C16.4933 9.62494 16.3305 9.55751 16.1608 9.55751V9.55751Z" fill="currentColor"/></svg></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".home .latest-news-wrapper").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    nextArrow:
      '<div class="next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1608 9.55751H6.18578L9.61878 6.12451C9.68547 6.06691 9.73955 5.99615 9.77762 5.91667C9.81569 5.83719 9.83693 5.75071 9.84002 5.66264C9.84312 5.57457 9.82799 5.48681 9.79558 5.40486C9.76318 5.3229 9.7142 5.24853 9.65171 5.18639C9.58923 5.12425 9.51458 5.07568 9.43245 5.04373C9.35032 5.01178 9.26248 4.99714 9.17442 5.00072C9.08637 5.00429 9.00001 5.02602 8.92074 5.06453C8.84148 5.10304 8.77102 5.15751 8.71378 5.22451L4.18878 9.74951C4.15887 9.78012 4.13207 9.81361 4.10878 9.84951C4.09778 9.86551 4.09078 9.88351 4.08078 9.89951C4.0694 9.91896 4.05905 9.93898 4.04978 9.95951C4.04144 9.98107 4.03443 10.0031 4.02878 10.0255C4.02378 10.0435 4.01678 10.0605 4.01278 10.0785C4.00429 10.12 3.99993 10.1622 3.99978 10.2045C3.99977 10.2461 4.00379 10.2877 4.01178 10.3285C4.01178 10.3475 4.02278 10.3655 4.02878 10.3845C4.03424 10.4062 4.04092 10.4276 4.04878 10.4485C4.05865 10.4701 4.06966 10.4911 4.08178 10.5115C4.09078 10.5275 4.09778 10.5435 4.10678 10.5585C4.12999 10.5945 4.15679 10.628 4.18678 10.6585L8.71378 15.1755C8.77288 15.2364 8.8435 15.2849 8.92151 15.3182C8.99953 15.3515 9.08339 15.369 9.16822 15.3696C9.25305 15.3702 9.33716 15.354 9.41565 15.3218C9.49414 15.2896 9.56546 15.2422 9.62544 15.1822C9.68543 15.1222 9.73289 15.0509 9.76507 14.9724C9.79725 14.8939 9.8135 14.8098 9.81288 14.725C9.81226 14.6401 9.79478 14.5563 9.76146 14.4782C9.72814 14.4002 9.67964 14.3296 9.61878 14.2705L6.18578 10.8375H16.1608C16.3305 10.8375 16.4933 10.7701 16.6133 10.6501C16.7334 10.53 16.8008 10.3673 16.8008 10.1975C16.8008 10.0278 16.7334 9.86499 16.6133 9.74497C16.4933 9.62494 16.3305 9.55751 16.1608 9.55751V9.55751Z" fill="currentColor"/></svg></div>',
    prevArrow:
      '<div class="prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1608 9.55751H6.18578L9.61878 6.12451C9.68547 6.06691 9.73955 5.99615 9.77762 5.91667C9.81569 5.83719 9.83693 5.75071 9.84002 5.66264C9.84312 5.57457 9.82799 5.48681 9.79558 5.40486C9.76318 5.3229 9.7142 5.24853 9.65171 5.18639C9.58923 5.12425 9.51458 5.07568 9.43245 5.04373C9.35032 5.01178 9.26248 4.99714 9.17442 5.00072C9.08637 5.00429 9.00001 5.02602 8.92074 5.06453C8.84148 5.10304 8.77102 5.15751 8.71378 5.22451L4.18878 9.74951C4.15887 9.78012 4.13207 9.81361 4.10878 9.84951C4.09778 9.86551 4.09078 9.88351 4.08078 9.89951C4.0694 9.91896 4.05905 9.93898 4.04978 9.95951C4.04144 9.98107 4.03443 10.0031 4.02878 10.0255C4.02378 10.0435 4.01678 10.0605 4.01278 10.0785C4.00429 10.12 3.99993 10.1622 3.99978 10.2045C3.99977 10.2461 4.00379 10.2877 4.01178 10.3285C4.01178 10.3475 4.02278 10.3655 4.02878 10.3845C4.03424 10.4062 4.04092 10.4276 4.04878 10.4485C4.05865 10.4701 4.06966 10.4911 4.08178 10.5115C4.09078 10.5275 4.09778 10.5435 4.10678 10.5585C4.12999 10.5945 4.15679 10.628 4.18678 10.6585L8.71378 15.1755C8.77288 15.2364 8.8435 15.2849 8.92151 15.3182C8.99953 15.3515 9.08339 15.369 9.16822 15.3696C9.25305 15.3702 9.33716 15.354 9.41565 15.3218C9.49414 15.2896 9.56546 15.2422 9.62544 15.1822C9.68543 15.1222 9.73289 15.0509 9.76507 14.9724C9.79725 14.8939 9.8135 14.8098 9.81288 14.725C9.81226 14.6401 9.79478 14.5563 9.76146 14.4782C9.72814 14.4002 9.67964 14.3296 9.61878 14.2705L6.18578 10.8375H16.1608C16.3305 10.8375 16.4933 10.7701 16.6133 10.6501C16.7334 10.53 16.8008 10.3673 16.8008 10.1975C16.8008 10.0278 16.7334 9.86499 16.6133 9.74497C16.4933 9.62494 16.3305 9.55751 16.1608 9.55751V9.55751Z" fill="currentColor"/></svg></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

function faqPageHash() {
  if ($("body").hasClass("post-type-archive-faq")) {
    if ($(".accordion" + window.location.hash).length != 0) {
      console.log("dank");
      var target = $(".accordion" + window.location.hash);

      $("html, body").animate(
        {
          scrollTop: target.offset().top - 120,
        },
        1000,
        function () {}
      );
    }
  }
}

function search_filters(buttons, itemsWrapper, eleSearched) {
  $(buttons).click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");

      var searchedItems = $(this)
        .closest(itemsWrapper)
        .find(eleSearched)
        .filter(function () {
          $(this)
            .closest(itemsWrapper + " " + eleSearched)
            .toggle($(this).attr("data-tag").indexOf("") > -1);
          return (
            $(this)
              .closest(itemsWrapper + " " + eleSearched)
              .attr("data-tag")
              .indexOf("") > -1
          );
        });

      return;
    } else {
      $(buttons).each(function () {
        $(this).removeClass("active");
      });

      $(this).addClass("active");

      var $filter = $(this).attr("id");

      var searchedItems = $(this)
        .closest(itemsWrapper)
        .find(eleSearched)
        .filter(function () {
          $(this)
            .closest(itemsWrapper + " " + eleSearched)
            .toggle($(this).attr("data-tag").indexOf($filter) > -1);
          return (
            $(this)
              .closest(itemsWrapper + " " + eleSearched)
              .attr("data-tag")
              .indexOf($filter) > -1
          );
        });

      if (searchedItems.length <= 0 && $(".no-items-found").length <= 0) {
        $(this)
          .closest(itemsWrapper)
          .append('<h3 class="no-items-found" >No items found</h3>');
      }

      if (searchedItems.length > 0) {
        $(this).closest(itemsWrapper).find(".no-items-found").remove();
      }
      return;
    }
  });

  if ($(buttons).length > 0) {
    var hash = location.hash;
    $(hash).click();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1
    );
  }
}

function homepageMenuScroll() {
  if ($("body").hasClass("home")) {
    var controller = new ScrollMagic.Controller({});

    var scene = new ScrollMagic.Scene({
      triggerElement: ".splash-inner .button",
    })
      .setClassToggle("header", "active")
      .addTo(controller);
  }
}

function resourcesImageSCroll() {
  if ($("body").hasClass("page-template-resources")) {
    $(window).on("load resize orientationchange", function () {
      var controller = new ScrollMagic.Controller({});
      if ($(window).width() > 1025) {
        var scene = new ScrollMagic.Scene({
          triggerElement: ".main-row .img-wrapper",
          duration:
            $(".col.text").outerHeight() -
            $(".main-row .img-wrapper").outerHeight(),
        })
          .setPin(".main-row .img-wrapper")
          .triggerHook(0.15)
          .addTo(controller);
      }
    });
  }
}

function alreadyStartedImageSCroll() {
  if ($("body").hasClass("page-template-already-started")) {
    $(window).on("load resize orientationchange", function () {
      var controller = new ScrollMagic.Controller({});
      if ($(window).width() > 1025) {
        var $ele = ".organizations .img-wrapper";
        var scene = new ScrollMagic.Scene({
          triggerElement: $ele,
          duration: $(".orgs").outerHeight() - $($ele).outerHeight(),
        })
          .setPin($ele)
          .triggerHook(0.175)
          .addTo(controller);
      }
    });
  }
}

function mobileMenu() {
  $(".mobile-menu-button").click(function () {
    $(this).toggleClass("active");
    $("body").toggleClass("menu-active");
    $(".menu-search-wrapper").toggleClass("active");
  });

  $(".menu-item-has-children").click(function () {
    $(this).find("nav").slideToggle();
    $(this).toggleClass("menu-active");
  });
}

// Search drop down
function searchDropDown() {
  $(".search-icon").click(function () {
    $(this).toggleClass("active");
    $(this)
      .closest(".search-icon-wrapper")
      .find("#searchform")
      .toggleClass("active");
  });
}

// general accordions
function accordionsInit() {
  function accordionFunc(ele) {
    $(ele + " " + ele + "-inner > .title").click(function (e) {
      $(this).closest(ele).toggleClass("active");
      $(this).toggleClass("active");
      $(this).siblings().slideToggle();

      e.stopPropagation();
    });
  }
  accordionFunc(".accordion");
}

// side tabs
function side_tabs(ele, tabBodyWrapper) {
  if (!tabBodyWrapper) {
    var bodyEle = ".tabs";
  } else {
    var bodyEle = tabBodyWrapper;
  }
  var Button = $(ele);
  $(Button).click(function (e) {
    e.preventDefault();
    var Href = $(this).attr("id");
    $(Button).each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    $(this)
      .closest(bodyEle)
      .find(".side-tab-body")
      .each(function () {
        $(this).removeClass("active");
      });
    $(".side-tab-body#" + Href).addClass("active");
  });
  $(Button).first().click();

  if ($(".side-tab").length > 0) {
    var hash = location.hash;
    $(hash).click();
  }
}

// basic top tabs
function top_tabs(ele, tabBodyWrapper) {
  if (!tabBodyWrapper) {
    var bodyEle = ".tabs";
  } else {
    var bodyEle = tabBodyWrapper;
  }
  var Button = $(ele);
  $(Button).click(function (e) {
    e.preventDefault();
    var Href = $(this).attr("id");
    $(Button).each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    $(this)
      .closest(bodyEle)
      .find(".tab-body")
      .each(function () {
        $(this).removeClass("active");
      });
    $(".tab-body#" + Href).addClass("active");
  });
  $(Button).first().click();
}

// input search for custom lists
function search_keys(input, itemsWrapper, eleSearched) {
  function handleKeyUp() {
    $(".search-filter-nav button").each(function () {
      $(this).removeClass("active");
    });

    var value = $(this).val().toLowerCase();

    var searchedItems = $(this)
      .closest(itemsWrapper)
      .find(eleSearched)
      .filter(function () {
        $(this)
          .closest(itemsWrapper + " " + eleSearched)
          .toggle($(this).text().toLowerCase().indexOf(value) > -1);
        return (
          $(this)
            .closest(itemsWrapper + " " + eleSearched)
            .text()
            .toLowerCase()
            .indexOf(value) > -1
        );
      });

    if (searchedItems.length <= 0 && $(".no-items-found").length <= 0) {
      $(this)
        .closest(itemsWrapper)
        .append('<h3 class="no-items-found" >No items found</h3>');
    }

    if (searchedItems.length > 0) {
      $(this).closest(itemsWrapper).find(".no-items-found").remove();
    }
  }

  $(input).on("keyup", handleKeyUp);

  $(input).each(function () {
    handleKeyUp.call($(this));
  });
}

function smooth_scroll() {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        if ($("body").hasClass("post-type-archive-faq")) {
          $(".accordion").filter(function () {
            $(this)
              .closest(".search-wrapper .accordion")
              .toggle($(this).attr("data-tag").indexOf("") > -1);
            return (
              $(this)
                .closest(".search-wrapper .accordion")
                .attr("data-tag")
                .indexOf("") > -1
            );
          });
        }

        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 120,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
}
