// Cast SDK
const js = document.createElement("script");
js.crossOrigin = "anonymous";
js.src = chrome.runtime.getURL("js/cast.min.js");
document.head.appendChild(js);

// Jquery
const jquery = document.createElement("script");
jquery.crossOrigin = "anonymous";
jquery.src = chrome.runtime.getURL("js/jquery-3.7.1.min.js");
document.head.appendChild(jquery);

// Content script
const contentScript = document.createElement("script");
contentScript.src = chrome.runtime.getURL("js/content_script.js");
document.head.appendChild(contentScript);
