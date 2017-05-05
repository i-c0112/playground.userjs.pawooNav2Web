// ==UserScript==
// @name         Nav to web | pawoo.net
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Quick navigation to web app page from /@`username`.
// @author       i-c0112
// @match        https://pawoo.net/@*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var elUname = document.querySelector('small span');
    if (elUname === null) {return;}
    (async function(){
        var response = await fetch('https://pawoo.net/api/v1/search?q=' + elUname.innerText);
        var json = await response.json();
        console.log(json);
        elUname.addEventListener('click', e => window.location.assign('https://pawoo.net/web/accounts/' + json.accounts[0].id));
    })();
})();
