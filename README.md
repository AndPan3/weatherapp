Wetter APP mit Python, Vanilla JS, HTML und CSS

So funktioniert es:

  1. fetch.py ruft die daten von Open Meteo ab
  2. fetch.py macht die Daten in einer JSON Format
  3. script.js verarbeitet die Daten und macht sie bereit für die Website
  4. HTML und CSS sind das Website

Warum JSON?
  Weil so gehe ich die Rate Limits um, da es gecached wird, entlastet es die Open Meteo Servers und es ist einfacher so die Daten zu verarbeiten.
