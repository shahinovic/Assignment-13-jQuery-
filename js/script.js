$(".open").on("click", () => {
  $(".navbar").animate({ left: "0px" }, 500);
  $(".open").fadeOut(500);
});

$(".close").on("click", () => {
  $(".navbar").animate({ left: "-250px" }, 500);
  $(".open").fadeIn(500);
});

$(".accord-item p:not(:first)").slideUp();

$(".accord-item h3").on("click", (e) => {
  $(e.currentTarget).next().slideToggle();
  $(e.currentTarget).parent().siblings().find("p").slideUp();
});

const countDownToTime = (countTo) => {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
};
countDownToTime("10 october 2025 9:56:00");

// textarea

const maxLength = 100;
$("textarea").on("input", () => {
  let length = $("textarea").val().length;
  let AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#text-num").text("your available character finished");
  } else {
    $("#text-num").text(AmountLeft);
  }
});
