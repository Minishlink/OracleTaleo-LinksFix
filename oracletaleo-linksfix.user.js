// ==UserScript==
// @name        Oracle Taleo Javascript Links Fix
// @description A UserScript which replaces the non-clickable javascript links of Oracle Taleo with regular links
// @namespace   https://github.com/Minishlink
// @downloadURL https://raw.githubusercontent.com/Minishlink/OracleTaleo-LinksFix/master/oracletaleo-linksfix.user.js
// @updateURL   https://raw.githubusercontent.com/Minishlink/OracleTaleo-LinksFix/master/oracletaleo-linksfix.user.js
// @homepageURL https://github.com/Minishlink/OracleTaleo-LinksFix
// @include     http://*.taleo.net/*
// @include     https://*.taleo.net/*
// @version     1.1
// @grant       none
// ==/UserScript==
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
if (MutationObserver) {
  var observer = new MutationObserver(function (mutations) {
    replace();
  }).observe(document.body, {
    childList: true,
    subtree: true
  });
}

function replace() {
  Array.prototype.forEach.call(document.getElementsByClassName('titlelink'), function (link) {
    link.childNodes[0].href = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1) + 'jobdetail.ftl' + '?job=' + link.parentNode.parentNode.parentNode.parentNode.parentNode.id;
  });
}
