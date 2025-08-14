var colors = ["#f5d76e", "#f7ca18", "#f4d03f", "#ececec", "#ecf0f1", "#a2ded0"];

setTimeout(function () {
  var starsBox = document.getElementById("starsBox");

  for (var i = 0; i <= 250; i++) {
    var size = Math.random() * 3;
    var color = colors[Math.floor(Math.random() * colors.length)];

    var star = document.createElement("span");
    star.style.opacity = 0;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.background = color;
    star.style.position = "absolute";
    star.style.borderRadius = "100%";
    star.style.boxShadow = "0 0 " + Math.random() * 10 + "px " + color;
    star.style.transition = "left 500s linear, top 500s linear";

    starsBox.prepend(star);

    // Animate opacity fade-in over 1 second using CSS transition
    // To do that, force a small delay before changing opacity to 1
    (function (s) {
      setTimeout(function () {
        s.style.opacity = 1;
      }, 10);
    })(star);
  }

  // Move stars randomly after 30ms and then every 1,000,000 ms (approx 16.6 min)
  function moveStars() {
    var spans = starsBox.querySelectorAll("span");
    spans.forEach(function (star) {
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
    });
  }

  setTimeout(moveStars, 30);
  setInterval(moveStars, 1000000);
}, 1000);

const light = document.createElement('div');  // create the div
light.id = 'light';                           // assign the ID
document.body.appendChild(light);             // add to the DOM

document.addEventListener('mousemove', (e) => {
    // position the #light so its center is at the mouse cursor
    light.style.left = (e.clientX - 100) + 'px';
    light.style.top = (e.clientY - 100) + 'px';
});
