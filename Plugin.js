// ==UserScript==
// @name         Magister Custom CSS loader
// @namespace    magie
// @version      0.1
// @description  Laad aangepaste CSS voor magister.
// @author       Naamloos
// @match        *.magister.net/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant unsafeWindow
// @grant GM_addStyle
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_xmlhttpRequest
// @grant GM_registerMenuCommand
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_log
// @grant GM_openInTab
// @grant GM_setClipboard
// @grant GM_info
// @grant GM_getMetadata
// ==/UserScript==

var main = function() {
    var css = GM_getValue("magister_theme", "https://naamloosdt.github.io/MagisterTheme/style/darkred.css");
    if(css == "null" || css === null){
        GM_setValue("magister_theme", "https://naamloosdt.github.io/MagisterTheme/style/darkred.css");
    }
    css = GM_getValue("magister_theme", "https://naamloosdt.github.io/MagisterTheme/style/darkred.css");
    try{
        var bg = document.getElementsByTagName('mg-background-carrousel')[0];
        bg.parentNode.removeChild(bg);
    }catch(e){
    }
    $('<link rel="stylesheet" href="'+css+'">').appendTo('head');
};

$(document).ready(main);

$('<a id="thema" tabindex="3" style="font-size: 6pt;"> [verander thema]</a>').appendTo('div');

function setthema(url){
    GM_setValue("magister_theme", url);
    location.reload(true);
}

$("#thema").click(function(){
    var url = prompt("Stel thema URL in", GM_getValue("magister_theme", "https://naamloosdt.github.io/MagisterTheme/style/darkred.css"));
    setthema(url);
});