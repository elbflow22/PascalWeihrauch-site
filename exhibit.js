(function () {
  // Beispieldaten – angelehnt an echte Befunde, Namen und Werte verändert.
  var fields = ["Bezeichnung", "Energie je 100 g", "Zutaten", "Hersteller", "Grundpreis"];
  var data = {
    shop: [
      ["Hafer-Porridge Zimt & Apfel, 400 g"],
      ["1.511 kJ / 358 kcal"],
      ["Vollkorn-Haferflocken 68 %, Apfelstücke 24 %, Apfelpulver 7 %, Zimt 1 %"],
      ["Musterfood GmbH, Musterstraße 1, 00000 Musterstadt"],
      ["12,50 € / kg"]
    ],
    haendler: [
      ["Hafer Porridge Zimt Apfel 400g"],
      ["1.511 kJ / 358 kcal"],
      ["Vollkorn-Haferflocken 68,2 %, Apfelstücke 23,8 %, 7%, Apfelpulver, Zimt 1 %", "Die Mengenangabe hängt an keiner Zutat mehr."],
      ["Musterfood GmbH, Alte Allee 400000 Musterstadt", "Zweite, veraltete Anschrift – Hausnummer und PLZ zusammengeklebt."],
      ["12,50 € / kg"]
    ],
    markt: [
      ["Porridge Zimt Apfel Haferbrei Frühstück Vegan Bio Hafer 400g", "Keyword-Titel ohne Marke; weicht von der Bezeichnung ab."],
      ["1.631 kJ / 289 kcal", "Rechnet nicht auf: 1.631 kJ sind rund 390 kcal."],
      ["Vollkorn-Haferflocken 68 %, Apfelstücke 24 %, Apfelpulver 7 %, Zimt 1 %"],
      ["Musterfood", "Nur der Markenname, keine Anschrift."],
      ["keine Angabe", "Grundpreis fehlt."]
    ]
  };

  var body = document.getElementById("ex-body");
  var count = document.getElementById("ex-n");
  var tabs = document.querySelectorAll(".tabs button");

  function render(ch, animate) {
    var rows = data[ch], n = 0;
    body.innerHTML = "";
    rows.forEach(function (r, i) {
      var div = document.createElement("div");
      div.className = "row";
      var dt = document.createElement("dt"); dt.textContent = fields[i];
      var dd = document.createElement("dd");
      var val = document.createElement("span"); val.className = "val"; val.textContent = r[0];
      dd.appendChild(val);
      if (r[1]) {
        n++;
        var note = document.createElement("span"); note.className = "note"; note.textContent = r[1];
        dd.appendChild(note);
      }
      div.appendChild(dt); div.appendChild(dd); body.appendChild(div);
      if (r[1]) {
        if (animate) { setTimeout(function () { div.classList.add("diff"); }, 120 + i * 140); }
        else { div.classList.add("diff"); }
      }
    });
    count.textContent = n;
  }

  tabs.forEach(function (b) {
    b.addEventListener("click", function () {
      tabs.forEach(function (t) {
        t.setAttribute("aria-selected", t === b ? "true" : "false");
        t.tabIndex = t === b ? 0 : -1;
      });
      render(b.dataset.ch, true);
    });
    b.addEventListener("keydown", function (e) {
      var list = Array.prototype.slice.call(tabs), i = list.indexOf(b);
      if (e.key === "ArrowRight") { list[(i + 1) % list.length].focus(); list[(i + 1) % list.length].click(); }
      if (e.key === "ArrowLeft") { list[(i + list.length - 1) % list.length].focus(); list[(i + list.length - 1) % list.length].click(); }
      if (e.key === "Home") { e.preventDefault(); list[0].focus(); list[0].click(); }
      if (e.key === "End") { e.preventDefault(); list[list.length - 1].focus(); list[list.length - 1].click(); }
    });
  });

  tabs.forEach(function (t) { t.tabIndex = t.getAttribute("aria-selected") === "true" ? 0 : -1; });
  render("shop", false);

  // Einmaliger Moment beim Laden: nach kurzer Pause wechselt die Ansicht zum Marktplatz.
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) {
    setTimeout(function () {
      if (document.querySelector('.tabs button[data-ch="shop"]').getAttribute("aria-selected") === "true") {
        tabs[2].click();
      }
    }, 1800);
  }
})();
