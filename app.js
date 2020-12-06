$(document).ready(function () {
  $("#trigger").click(function () {
    $(".notification").slideUp();
  });
});

$(document).ready(function () {
  $("#btn-target").click(function () {
    $(".sliding-panel").slideToggle();
  });
});

$(document).ready(function () {
  var currentTime = new Date().getTime();
  Date.prototype.addMinutes = function () {
    this.setTime(this.getTime() + (6 * 100000));
    return this;
  };
  var timer = new Date().addMinutes().getTime();
  $("#btn-target").click(function () {
    $(this).hide();
    localStorage.setItem("storedTime", timer);
  });
  if (localStorage.getItem("storedTime") >= currentTime) {
    $(".sliding-panel").hide();
  } else {
    $(".sliding-panel").show();
  }
});


