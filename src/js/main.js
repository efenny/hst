// const toggleSwitch = document.querySelector(
//   '.theme-switch input[type="checkbox"]'
// );

// const currentTheme = localStorage.getItem("theme")
//   ? localStorage.getItem("theme")
//   : null;

// if (currentTheme) {
//   document.documentElement.setAttribute("data-theme", currentTheme);

//   if (currentTheme === "dark") {
//     toggleSwitch.checked = true;
//   }
// }

// function switchTheme(e) {
//   if (e.target.checked) {
//     document.documentElement.setAttribute("data-theme", "dark");
//     localStorage.setItem("theme", "dark"); //add this
//   } else {
//     document.documentElement.setAttribute("data-theme", "light");
//     localStorage.setItem("theme", "light"); //add this
//   }
// }

// toggleSwitch.addEventListener("change", switchTheme, false);

var $ = jQuery.noConflict();

$(document).ready(function() {
  console.log("Let's hope this all works");
  accordionsInit();
  side_tabs(".side-tab-nav button", ".side-tab");
});

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
    console.log(Href);
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
