document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.querySelector("h1");
    if(titulo) {
      titulo.addEventListener("click", function() {
        let pos = 0, step = 1;
        function dance() {
          pos += step;
          if (Math.abs(pos) > 20) step *= -1;
          titulo.style.transform = `translateX(${pos}px)`;
          requestAnimationFrame(dance);
        }
        dance();
      });
    }
  });
