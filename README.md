# pascalweihrauch.de

Statische Website (HTML/CSS/JS, keine Build-Schritte, keine Cookies, Schrift selbst gehostet).

## Vor dem Livegang ersetzen
- cal.com-Link nur in `termin/index.html` (2x) – alle Buttons und der QR-Code zeigen auf pascalweihrauch.de/termin
- Zwei gelbe Platzhalter in datenschutz.html (Cal.com: Anschrift und Grundlage der USA-Übermittlung)
- Zahlen im Abschnitt „Stichprobe“ prüfen (Quelle: Tranche-1-Excel)

## Veröffentlichen mit GitHub Pages
1. Repository-Einstellungen → Pages → Source: „Deploy from a branch“, Branch `main`, Ordner `/ (root)`.
2. Custom domain: `pascalweihrauch.de` eintragen (legt die Datei CNAME an) und „Enforce HTTPS“ aktivieren.
3. Beim Domain-Anbieter: A-Records für `@` auf 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 und CNAME `www` auf `<github-benutzer>.github.io`.
