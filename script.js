$(document).ready(function() {
  $(".image").ripples({
    resolution: 512,
    perturbance: 0.04,
  });

  // Agregar evento touchstart para dispositivos móviles
  $(".image").on("touchstart", function(event) {
    $(this).ripples("drop", event.originalEvent.touches[0].pageX, event.originalEvent.touches[0].pageY, Math.random() * 3 + 2);
  });
});
