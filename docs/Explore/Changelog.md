# Change Log

# 2022/5/5 0.0.10 beta
1. [ ] Samenvoegen PC en APP
  1. [x] Concept gereed
  1. [ ] Testen





# 2020/08
1. [ ] Samples
  1. [x] Zie [Sample schema properties formulier configuratie](https://aliconnect.nl/sites/samples/form)
  1. [x] Local web applicatie sample
  1. [x] Printer service via google chrome, sample
  1. [x] Mailer service sample
1. [ ] Corona app
1. [ ] Excel to Web
1. [ ] Authenticator
  - scope wordt overgenomen ui config.yml (aim.auth.scope)
  - scope admin:readwrite wordt toegevoegd als de gebruiker op aliconnect, AccountId===ContactId.
  - scope kan worden aangepast bij login accept.
  - scope gebruiker wordt weggeschreven onder `scope_requested`
    - wordt verder gebrukt als `scope_id`
1. [ ] Meenemen docs uit alle domeinen per domein

# 2020/09 Version 2
1. [ ] Aan het werk aan de login pagina als gevolg van wijzigingen in de opbouw config.yaml.
1. [ ] word export in JS
1. [ ] dms.php
1. [ ] aim.php
1. [ ] aim.js
  1. [ ] Http
    1. [ ] request: Bij action in paths, respnses overnemen uit configuratie
1. [ ] web.js
  1. [ ] AIM
    1. [ ] createElement: FORM: Bij action in paths, respnses overnemen uit configuratie
  1. [ ] Topbar Language Icon
  1. [ ] Keyboard handling, afwerken
  1. [ ] `with` verwijderen voor `'use strict';`
  1. [ ] button teksten als argument styesheet `::after`, multi-language
  1. [ ] Itemform Bijlagen afbeelding schets toevoegen aan form
  1. [ ] Itemform Bijlagen afbeelding foto toevoegen aan form
  1. [ ] docs
    1. [ ] md files, comment <-- --> verwijderen uit tekst.
  1. [ ] Docview
    1. [ ] Docview: genereer lijst met meest recente file wijzigingen, docs en code
    1. [ ] Docview: page reload werkt niet
    1. [ ] Docview: Markdown, Bold gaat nog mis bij leesteken voor ** bv `)**`
    1. [ ] Docview: create domain
    1. [ ] Docview: Header Counters optional
    1. [ ] Docview tab weergave
    1. [ ] Docview test request schermen
    1. [ ] Docview Item Repport generatie
    1. [ ] Docs: Tutorial Control
  1. [ ] Itemview
    1. [ ] Itemview: Messenger Bijlagen verwerken (opslaan en weergeven)
    1. [ ] Itemview: Messenger Bijlagen afbeelding schets toevoegen (nieuw)
    1. [ ] Itemview: Messenger Bijlagen afbeelding foto toevoegen (nieuw)
    1. [ ] Itemview: verversen na sluiten Itemform
    1. [ ] Itemview: Link Hover Popup card
    1. [ ] Itemview: Image organiser
    1. [ ] Itemview: PopOut
    1. [ ] Itemview: DragOut
  1. [ ] Itemform
    1. [ ] Bij een input info, moet dit zichtbaar zijn met bv een icon (i) rechts einde veld.
    1. [ ] Itemform Gebruikers toevoegen mogenlijk (gereed, testen)
  1. [ ] Iteminfo
    1. [ ] Iteminfo panel
  1. [ ] Listview
    1. [ ] contextmenu
    1. [ ] Listview: Sort mogelijk
    1. [ ] Listview: Print met kop en voetteksten, click select
    1. [ ] Listview: Filter Fully Functional
    1. [ ] Listview: Maps
    1. [ ] Listview: Word Export
    1. [ ] Listview: tabel weergave configureerbaar in schema (nieuw)
  1. [ ] Footer Detail Informatie regel bij hover over object toevoegen onder aan scherm. Ook over veld. Info als readonly enz. (nieuw)
  1. [ ] Start Search, globale zoekfunctie
  1. [ ] Start Favorite list
  1. [ ] Upload excel import gebaseerd op upload configuratie
  1. [ ] Flag instellen door middel van popup menu, list, page en form
  1. [ ] Categorie instellen door middel van popup menu, list, page en form
  1. [ ] Imageview beschikbaar, verwerkt in main click event
  1. [ ] Notification
  1. [ ] Task schema
  1. [ ] Task Treeview
  1. [ ] Scriptview
    1. [ ] Image voor externe website
    1. [ ] Graph voor externe website
    1. [ ] Model voor externe website
    1. [ ] Diagram voor externe website
1. [ ] Rest
  1. [ ] Rest: `pdf` Export order
1. [ ] Authenticator
  1. [ ] Authenticator: identification
  1. [ ] Authenticator: offline identification
1. [ ] `el.createElement({maps:(el) => {}})`, maken, kan gebruikt worden in rapport
1. [ ] `el.createElement({chart:(el) => {}})`, maken, kan gebruikt worden in rapport
1. [ ] `el.createElement({three:(el) => {}})`, maken, kan gebruikt worden in rapport of elders
1. [ ] `el.createElement({ganth:(el) => {}})` niet, is onderdeel van OM, misschien wel, is dan te gebruiken in rapport, site.
1. [ ] `el.createElement({calendar:(el) => {}})`, niet, is onderdeel van OM
1. [ ] Demo email aliasses aanmaken
1. [ ] auth:

# 2020/12 Version 2.1
1. [ ] web.js
  1. [ ] Treeview
    1. [ ] Itemview: Print met kop en voetteksten
    1. [ ] Treeview: keyboard moves
    1. [ ] Treeview: drag drop
    1. [ ] Treeview: contextmenu
    1. [ ] Treeview: volledig gereed
1. [ ] Algemeen
  1. [ ] Export naar `json`
  1. [ ] Export naar `zip`
1. [ ] node.js
  1. [ ] Modbus
  1. [ ] OnChange
1. [ ] Microsoft
  1. [ ] Wordapp
    1. [ ] Docs
    1. [ ] Methods
  1. [ ] Onedrive

# 2021/03 Version 2.2
1. [ ] web.js
  1. [ ] Listview: Graph
  1. [ ] Listview: Ganth
  1. [ ] Listview: Diagram
  1. [ ] Listview: Calendar
  1. [ ] Listview: Model, netwerk analyse
  1. [ ] Listview: Search, actieve lijst zoekfunctie
1. [ ] Aliconnector
  1. [ ] Aliconnector: Bijlage office (word/excel) openen
  1. [ ] Aliconnector: IE app beschikbaar
  1. [ ] Aliconnector: IE scanner app

# 2021/06 Version 2.3
1. [ ] web.js
  1. [ ] Shop
    1. [ ] Bag
    1. [ ] Customer Login
    1. [ ] Order Form
    1. [ ] Purchase order
    1. [ ] Sales order
    1. [ ] Order printout with QR code
    1. [ ] Invoice printout with QR code
    1. [ ] Order/Invoice QR scan
    1. [ ] Security Configuration, UI
    1. [ ] Field Security Configuration, UI

# 2021
1. [ ] Server
  1. [ ] 2008 opheffen
  1. [ ] Linux opheffen
  1. [ ] Server 2016 naar ITB2
1. [ ] Admin
  1. [ ] User Invoice
  1. [ ] Payment Required

# 2020/07
1. [ ] Web
  1. [x] pdf opent in apart window in de app
  1. [x] afbeeldingen en bestanden in pageElement drag drop werkt
  1. [x] afbeeldingen en bestanden in formElement drag drop werkt, incl bijlagen toevoegen
  1. [x] Afbeelding toevoegen in tekst bericht
  1. [x] Afbeelding/Bijlage toevoegen aan tekst bericht
  1. [x] Listview: Tabel weergave
  1. [x] Listview: folder weergave in top
  1. [x] Listview: excel export
  1. [x] AIM.createElement aanroepbaar met arguments: type, className, text, etc.
1. [ ] Rest
  1. [x] Rest: Iedere gebruiker eigen domein met eigen configuratie
  1. [x] Rest: Fileopslaan beschikbaar
  1. [x] Rest: headers, get, cookie verzameld in keys, allemaal lowercase
  1. [x] Rest: Voor iederegebruiker een eigen config uit database
  1. [x] Rest: Voor een domein 1 config uit database of `config.local.yaml`
  1. [x] Rest: Batch handling beschikbaar
1. [x] WSS: Batch handling beschikbaar

# 2020/06
1. [x] app en om worden doorgestuurt naar de juiste app folder via Web: config rule
1. [x] sourceforce opgenomen in https://aliconnect.nl/sites/
1. [x] aim.client = Client api request aanroep geintroduceerd.
1. [x] Client API options geintroduceerd.
1. [x] php api: `public statis $config` bevat src `config.json`
1. [x] php api: `public statis $api` bevat src `api.json`
1. [x] config.json opgesplitst in api.json en config.json. config.json is configuratie van de applicatie, api.json is configuratie van de api.
1. [x] API.yaml
1. [x] Config.yaml
1. [x] Overal extensie yaml ipv yml. yaml is officiele extensie
1. [x] MarkDown in API Docs
1. [x] Method details in Docs
1. [x] API Specificatie in Docs
1. [x] AIM.require wordt uitgevoerd in Web: js
1. [x] AIM.config is nu AIM.Interfaces
1. [x] autofocus optie werkt nu ook in FORM onder een DIV element
1. [x] Creeren GO object in SS document, zie link https://rws.aliconnect.nl/eht/tms/webroot/docs/aanbesteding
1. [x] Voorbeeld script voor RWS/EHT
1. [x] GO wordt automatische aangemaakt mbv `el.createElement({go:(el) => {}})`
1. [x] require applicatie api.js wordt aangemaakt als script in head
1. [x] AIM.Element.create vervallen
1. [x] AIM.Element.create.treelist vervangen, loopt via AIM.createElement, option rows is nu treelist: []
1. [x] AIM.Element.create.buttonBar vervallen, loopt via AIM.createElement
1. [x] AIM.Element.prototype.appendForm vervallen, loopt via AIM.createElement
1. [x] AIM.prompt.{formname}.show is nu onshow
1. [x] AIM.createElement als algemen functie voor aanmaken dom elementen
1. [x] Api-key is case-insensitive gemaakt. Dus ook API-Key werkt
1. [x] Api-key kan worden meegegeven in header en in de query
1. [x] Api-key en X-Api-Key werken
1. [x] Excel import uitleg met API-Key in query data optie.
1. [x] Excel data Web: import werkend met APi-Key in header data en gedocumenteerd.
1. [x] Word add-in weer werkend gemaakt en gedocumenteerd.
1. [x] RegTest tool op https://aliconnect.nl/regextest.html
1. [x] Docs met `Markdown` aanzienlijk verbeterd (bug free). Meerdere dagen werk geweest.
1. [x] getApiKey uitgebreid met scope waarde.
1. [x] Docs getApiKey omgebouwd naar nieuwe form opties.
1. [x] Docs getApiKey is zelfstandig document in docs.

# 2020/05
1. [x] Benaming omgegooid, api zijn nu alle sources en dms is de database management server. Beide staan op github.
1. [x] PHP sources staan op github en niet meer in dms source. Deze moet je handmatig installeren indien benodigd. Staat in README file.
1. [x] Document index volledig aangepast
1. [x] JS en CSS minimize script verkleind aim.js, Web: js, app.js, Web: css bestanden. Bestanden worden opgeslagen op de server. Let op programmeer instructies.
1. [x] Opstarten Object Manager, query v=dev, maakt cookie aan en start zonder -min optie op scripts en stylesheets
1. [x] Versioning gebaseerd op https://semver.org/
1. [x] HTTP response, bevat nu alleen event.body en event.target.responseText bij WebJS en NodeJS. event.data enz verwijderd, deprecated.
1. [x] Bij docs, menu links veranderd naar pijltjes. Lettertype kleiner gemaakt.
1. [x] probleem met elementScroll in docs.js
1. [x] docs aangepast, index rechts werkt nu weer goed.
1. [x] dashbord op https://aliconnect.nl/sites/index.html voor alle sites
1. [x] Batch afhandeling gebouwd voor HTTP en WS request.
1. [x] request idem batch, bestaat uit method, url, body, headers
1. [x] response bestaat uit: status, body
1. [x] http request NodeJS volledig gelijk aan JS
1. [x] Documentatie, format text boven code block
1. [x] Log NodeJS, vaste afstand 15 caracters eerste tekst in concole.msg.
1. [x] Bij een PATCH request geeft de REST API nu alle gewijzigde velden terug. Deze worden in de aim.js weer verwerkt, scherm wordt bijgewerkt. Zo zal de DBAPI title aanpassen en deze terug geven na een patch.
  1. [x] De waarde LastModifiedDateTime wordt meegegeven. Deze kan doorgestuurd worden naar andere clients via ws zodat deze alle data op kunnen vragen >= dan LastModifiedDateTime.
  1. [x] Deze aanpak is trager dan het doorsturen van patch data via WS. Op dit moment blijven we dat doen. De WSS zorgt dat de data alleen daar aankomt waar hij ook toegestaan is.
  1. [x] Hier speelt security een rol.
1. [x] In formulier worden alleen de koppen geopend die door de gebruiker eerder zijn geopend. Loopt via een cookie.
1. [x] Opbouw van formulier HTML verplaats van OM code naar Web: code. Nu ook beschikbaar voor iedere Web: applicatie
1. [x] HTML opbouw nieuwe format met children eigenschap in appendTag
1. [x] ws bevat from_id
1. [x] ChildIndex
