let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #765fb0;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #765fb0;">Materializando visiones mediante la tecnología y el arte.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
