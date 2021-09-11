$(document).ready(function () {
  $(".header__button").on("click", function () {
    $(".modal").addClass("active");
  });
  $(".modal__close").on("click", function () {
    $(".modal").removeClass("active");
  });
});
