# blätterdach Baumpflege

Website von blätterdach e.U., Baumpflege in Wien. Gebaut mit [Astro](https://astro.build), komplett statisch.

## Inhalte bearbeiten

Alle Texte liegen in `src/content/`, nicht im Code:

| Datei | Inhalt |
| --- | --- |
| `einstellungen.json` | Kontaktdaten (Footer, Formular) und der Web3Forms-Schlüssel |
| `seiten/startseite.md`, `ueber.md`, `unternehmen.md` | Texte der Seiten (Absätze durch eine Leerzeile trennen) |
| `leistungen/*.md` | Eine Datei pro Leistung; `order` bestimmt die Reihenfolge, `image` ist optional |
| `rechtliches/*.md` | Impressum, AGB, Datenschutzerklärung |

## Entwicklung

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # Ausgabe in dist/
```

## Veröffentlichung

- **www.blaetterdach.com**: Build mit den Standardwerten (Seite im Root). `public/_redirects` leitet alte Wix-Adressen um.
- **Vorschau** unter ferlnand.github.io/blaetterdach: `.github/workflows/deploy.yml` baut bei jedem Push auf `main` mit `SITE_URL` und `BASE_PATH`.

## Kontaktformular

Das Formular sendet über [Web3Forms](https://web3forms.com) an office@blaetterdach.com. Solange `web3formsKey` in `einstellungen.json` leer ist, zeigt die Seite stattdessen E-Mail und Telefon.
