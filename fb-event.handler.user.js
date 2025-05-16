// ==UserScript==
// @name         Calendar: Make fb://event/ links clickable
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Converts fb://event/12345 links into clickable Facebook URLs in Google Calendar & Outlook calendars
// @author       Allan@Laal.ee
// @match        https://calendar.google.com/*
// @match        https://outlook.live.com/*
// @match        https://outlook.office.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const fbLinkRegex = /fb:\/\/event\/(\d{10,})/g;

    const processNode = (node) => {
        if (node.nodeType === Node.TEXT_NODE && fbLinkRegex.test(node.textContent)) {
            const span = document.createElement('span');
            span.innerHTML = node.textContent.replace(fbLinkRegex, (_, id) => {
                const url = `https://www.facebook.com/events/${id}`;
                return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
            });
            node.replaceWith(span);
        } else if (node.nodeType === Node.ELEMENT_NODE && !['SCRIPT', 'STYLE'].includes(node.tagName)) {
            for (const child of Array.from(node.childNodes)) {
                processNode(child);
            }
        }
    };

    const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                processNode(node);
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
