$(document).ready(function() {
  $(".image").ripples({
    resolution: 512,
    dropRadius: 10,
    perturbance: 0.04,
    interactive: true,
    crossOrigin: "",
    imageUrl: null
  });

  $(".image").on("touchstart", function(event) {
    $(this).ripples("drop", event.originalEvent.touches[0].pageX, event.originalEvent.touches[0].pageY, Math.random() * 3 + 2);
  });
});
