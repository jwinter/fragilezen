// ==UserScript==
// @name          fragilezen
// @namespace     http://jwinter.org/
// @description   Show what lane a story is in from the detail page 
// @include       https://*.agilezen.com/project/*/story/*
// @include       https://agilezen.com/project/*/story/*
// ==/UserScript==

try {
  var current_lane_a = document.getElementsByClassName('move-story current')[0];
  current_lane_a.style.fontWeight = "bold";
  current_lane_a.style.textDecoration = "underline";
} catch (x) {
}
