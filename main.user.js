// ==UserScript==
// @name         Friday Video control
// @namespace    https://github.com/Wcw5504/friday-video-control
// @version      1.0
// @description  add keyboard shortcuts to control video playing.
// @author       Wcw5504
// @match        https://video.friday.tw/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

document.querySelector("#movie_player .vop-caption-container").addEventListener("click", () => {
  document.getElementById("btnVODPlay").click();
});