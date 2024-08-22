
window.onload = function PutItBack() {
  var splashImage = document.getElementById('splashImage');

  setTimeout(function() {
    splashImage.classList.add("exit-effect");
  }, 1000);

  splashImage.addEventListener('transitionend', function() {
    document.body.removeChild(splashImage);
  });
}
