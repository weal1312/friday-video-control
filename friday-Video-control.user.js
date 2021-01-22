// ==UserScript==
// @name         Friday Video control
// @namespace    https://github.com/Wcw5504/friday-video-control
// @version      1.1
// @description  use left click to control video playing.
// @author       weal1312
// @match        https://video.friday.tw/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
  document.querySelector("#movie_player .vop-caption-container").addEventListener("click", () => {
    document.getElementById("btnVODPlay").click();
  })
})();