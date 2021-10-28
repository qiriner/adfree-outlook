// ==UserScript==
// @name Ad-free Outlook
// @version 1.0
// @grant GM_addStyle
// @run-at document-start
// @include https://outlook.live.com/mail/*
// ==/UserScript==

(function() {
let css = `
/* Right-side ad banner */
div#app > div > div:nth-child(3) > div > div > div > div > div:last-child {
    display: none !important;
}

div#app > div > div:nth-child(3) > div > div:nth-child(2) {
    display: none !important;
}

/* Bottom ad banner */
div#app > div > div:nth-child(3) > div > div > div > div:nth-child(2) {
    display: none !important;
}

/* "Upgrade" banner */
div#app > div > div:nth-child(3) > div > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) {
    display: none !important;
}
`;
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();
