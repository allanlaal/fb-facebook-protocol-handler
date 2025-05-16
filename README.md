# fb-facebook-protocol-handler
Converts fb://event/12345 links into clickable Facebook URLs in Google &amp; Outlook calendars


---

## What It Does

- Finds any `fb://event/<id>` strings in your calendar
- Replaces them with clickable links pointing to the corresponding Facebook event
- Works on:
  - [Google Calendar](https://calendar.google.com)
  - [Outlook Calendar](https://outlook.live.com)  
  - [Office 365 Calendar](https://outlook.office.com)

---

## Installation

1. **Install a userscript manager:**
   - [Violentmonkey (Recommended)](https://violentmonkey.github.io/)
   - [Tampermonkey](https://www.tampermonkey.net/)
   - [Greasemonkey (Not recommended due to limited compatibility)](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

2. **Install the script:**
   - [Click here to install fb-event.handler.user.js](https://github.com/allanlaal/fb-facebook-protocol-handler/raw/refs/heads/master/fb-event.handler.user.js)  
    

3. **Visit Google Calendar or Outlook Calendar**
   - The script will automatically convert `fb://event/` links into normal clickable links

---

## Notes

- No external requests or tracking
- Runs only on the matched calendar domains (see the @match rows)
- Does not alter anything permanently — works only on the client-side view

---

