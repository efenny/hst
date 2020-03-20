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
$(document).ready(function() {
  console.log("Let's hope this all works");
  accordionsInit();
  side_tabs(".side-tab-nav button", ".side-tab");
  top_tabs(".tab-nav button");
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
  console.log("dank");
});

// general accordions
function accordionsInit() {
  function accordionFunc(ele) {
    $(ele + " " + ele + "-inner > .title").click(function(e) {
      $(this)
        .closest(ele)
        .toggleClass("active");
      $(this).toggleClass("active");
      $(this)
        .siblings()
        .slideToggle();

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
  $(Button).click(function(e) {
    e.preventDefault();
    var Href = $(this).attr("id");
    $(Button).each(function() {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    $(this)
      .closest(bodyEle)
      .find(".side-tab-body")
      .each(function() {
        $(this).removeClass("active");
      });
    $(".side-tab-body#" + Href).addClass("active");
  });
  $(Button)
    .first()
    .click();
}

// basic top tabs
function top_tabs(ele, tabBodyWrapper) {
  if (!tabBodyWrapper) {
    var bodyEle = ".tabs";
  } else {
    var bodyEle = tabBodyWrapper;
  }
  var Button = $(ele);
  $(Button).click(function(e) {
    e.preventDefault();
    var Href = $(this).attr("id");
    $(Button).each(function() {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    $(this)
      .closest(bodyEle)
      .find(".tab-body")
      .each(function() {
        $(this).removeClass("active");
      });
    $(".tab-body#" + Href).addClass("active");
  });
  $(Button)
    .first()
    .click();
}

// input search for custom lists
function search_keys(input, itemsWrapper, eleSearched) {
  function handleKeyUp() {
    var value = $(this)
      .val()
      .toLowerCase();

    var searchedItems = $(this)
      .closest(itemsWrapper)
      .find(eleSearched)
      .filter(function() {
        $(this)
          .closest(itemsWrapper + " " + eleSearched)
          .toggle(
            $(this)
              .text()
              .toLowerCase()
              .indexOf(value) > -1
          );
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
      $(this)
        .closest(itemsWrapper)
        .find(".no-items-found")
        .remove();
    }
  }

  $(input).on("keyup", handleKeyUp);

  $(input).each(function() {
    handleKeyUp.call($(this));
  });
}
