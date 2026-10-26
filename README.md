# pascalweihrauch.de

Statische Website (HTML/CSS/JS, keine Build-Schritte, keine Cookies, Schrift selbst gehostet).

## Vor dem Livegang
- cal.com-Link: https://cal.com/pascal-weihrauch/produktdaten (in termin/index.html); DPA in cal.com akzeptieren
- CNAME, robots.txt, sitemap.xml und 404.html sind enthalten

## Veröffentlichen mit GitHub Pages
1. Repository-Einstellungen → Pages → Source: „Deploy from a branch“, Branch `main`, Ordner `/ (root)`.
2. Custom domain: `pascalweihrauch.de` eintragen (legt die Datei CNAME an) und „Enforce HTTPS“ aktivieren.
3. Beim Domain-Anbieter: A-Records für `@` auf 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 und CNAME `www` auf `<github-benutzer>.github.io`.
