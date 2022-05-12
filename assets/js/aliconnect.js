$().on('load', async e => {
  const searchParams = new URLSearchParams(document.location.search);
  console.log('aliconnect');
  const googleMapsRows = [
    {
      "schemaName": "salesorder",
      "id": 426963,
      "bonNr": 426963,
      "organisatieId": 3816,
      "opmerking": null,
      "afleverOrganisatieNaam": "Roseboom bv Autoschade en Spuiterij",
      "afleverContactNaam": null,
      "afleverAdres1": "Lenderinkweg 34",
      "afleverAdres2": "6733 AX Wekerom",
      "afzenderOrganisatieNaam": "Proving BV",
      "opdrachtDatumTijd": "2022-05-02 11:59:42.127",
      "status": "3-Gepakt",
      "statusInfo": null,
      "statusProces": "1-Opdr, 3-Versturen",
      "owner": null,
      "factuurNr": null,
      "transport": "Route",
      "modifiedBy": "John-Paul",
      "geolocatie": "52.115455,5.7186263",
      "@id": "https://dms.aliconnect.nl/api/v1/salesorder?id=426963",
      "headers": [
        "426963, 426963, 3816, Roseboom bv Autoschade en Spuiterij, Proving BV, 2-5-2022",
        "3-Gepakt, 1-Opdr, 3-Versturen, Route",
        ""
      ]
    },
    {
      "schemaName": "salesorder",
      "id": 426968,
      "bonNr": 426968,
      "organisatieId": 866,
      "opmerking": null,
      "afleverOrganisatieNaam": "Huub Harleman autoschade en restauratie",
      "afleverContactNaam": null,
      "afleverAdres1": "Nijmolensebeek 10",
      "afleverAdres2": "8171 PH Vaassen",
      "afzenderOrganisatieNaam": "Proving BV",
      "opdrachtDatumTijd": "2022-05-02 13:40:56.847",
      "status": "3-Gepakt",
      "statusInfo": null,
      "statusProces": "1-Opdr, 3-Versturen",
      "owner": null,
      "factuurNr": null,
      "transport": "Route",
      "modifiedBy": "John-Paul",
      "geolocatie": "52.29623620000000,5.97193890000000",
      "@id": "https://dms.aliconnect.nl/api/v1/salesorder?id=426968",
      "headers": [
        "426968, 426968, 866, Huub Harleman autoschade en restauratie, Proving BV, 2-5-2022",
        "3-Gepakt, 1-Opdr, 3-Versturen, Route",
        ""
      ]
    },
    {
      "schemaName": "salesorder",
      "id": 427045,
      "bonNr": 427045,
      "organisatieId": 322,
      "opmerking": null,
      "afleverOrganisatieNaam": "Mohlmann schade BV",
      "afleverContactNaam": "Geachte Heer, Mevrouw Möhlman,",
      "afleverAdres1": "Paramariboweg 9",
      "afleverAdres2": "7333 PA Apeldoorn",
      "afzenderOrganisatieNaam": "Proving BV",
      "opdrachtDatumTijd": "2022-05-03 14:15:35.073",
      "status": "3-Gepakt",
      "statusInfo": null,
      "statusProces": "1-Opdr, 3-Versturen",
      "owner": null,
      "factuurNr": null,
      "transport": "Route",
      "modifiedBy": "Jordie",
      "geolocatie": "52.17411300000000,5.97076070000000",
      "@id": "https://dms.aliconnect.nl/api/v1/salesorder?id=427045",
      "headers": [
        "427045, 427045, 322, Mohlmann schade BV, Geachte Heer, Mevrouw Möhlman,, Proving BV, 3-5-2022",
        "3-Gepakt, 1-Opdr, 3-Versturen, Route",
        ""
      ]
    },
    {
      "schemaName": "salesorder",
      "id": 427059,
      "bonNr": 427059,
      "organisatieId": 2240,
      "opmerking": null,
      "afleverOrganisatieNaam": "Garage Top",
      "afleverContactNaam": null,
      "afleverAdres1": "Essenerweg 108",
      "afleverAdres2": "3774 LC  Kootwijkerbroek",
      "afzenderOrganisatieNaam": "Proving BV",
      "opdrachtDatumTijd": "2022-05-03 15:28:52.243",
      "status": "3-Gepakt",
      "statusInfo": null,
      "statusProces": "1-Opdr, 3-Versturen",
      "owner": null,
      "factuurNr": null,
      "transport": "Route",
      "modifiedBy": "marcel",
      "geolocatie": "52.146847,5.6863847",
      "@id": "https://dms.aliconnect.nl/api/v1/salesorder?id=427059",
      "headers": [
        "427059, 427059, 2240, Garage Top, Proving BV, 3-5-2022",
        "3-Gepakt, 1-Opdr, 3-Versturen, Route",
        ""
      ]
    }
  ];

  Object.assign(aim,{
    setup(){
      $('.page>aside.right').text('');
      $('.page>div').class('').text('').append(
        $('form').on('submit', async e => {
          e.preventDefault();
          $('body>pre').append(
            $('div').append('Uw download bestand (zip) wordt voorbereid, een ogenblik geduld'),
          )
          const res = await aim.fetch('https://dms.aliconnect.nl/api/v1/aliconnect/setup')
          .query(document.location.search)
          .post(e);
          $('body>pre').append(
            $('div').append($('a').href(res.href).text(res.href).download('Alicon-0.0.1.zip')),
          )
          console.log(res);
        }).append(
          $('div').append(
            $('label').text('email'),
            $('input').name('accountname'),
          ),
          $('div').append(
            $('label').text('domain'),
            $('input').name('domain'),
          ),
          $('div').append(
            $('label').text('wordapp'),
            $('input').type('checkbox').name('wordapp'),
          ),

          $('div').append(
            $('label').text('localhost'),
            $('input').type('checkbox').name('localhost'),
          ),

          $('div').append(
            $('label').text('abis'),
            $('input').type('checkbox').name('abis'),
          ),
          $('div').append(
            $('label').text('nw'),
            $('input').type('checkbox').name('nw'),
          ),
          $('div').append(
            $('label').text('crmc'),
            $('input').type('checkbox').name('crmc'),
          ),
          $('div').append(
            $('label').text('server'),
            $('input').name('server').value('dms.aliconnect.nl'),
          ),
          $('div').append(
            $('label').text('database'),
            $('input').name('database'),
          ),
          $('div').append(
            $('label').text('user'),
            $('input').name('user'),
          ),
          $('div').append(
            $('label').text('password'),
            $('input').name('password'),
          ),
          $('nav').append(
            $('button').caption('terug').name('next').value('terug'),
            $('button').caption('verder').name('next').value('verder'),
          )
        ),
        $('pre'),
      )
    },
    async demoChart1(){
      $('div.page>aside.right').text('');
      $('div.page>div').class('').text('').append(
        $('div')
        .style('display:block;height:100%;width:100%;position:absolute;border:solid 1px gray;')
        .chart(await aim.fetch('https://dms.aliconnect.nl/api/v1/demo/chart1').get())
      );
    },
    demoChart1(){
      const factor = 365/daysIntoYear(new Date);
      const options = {
        // cursor: { type: "XYCursor", behavior: "zoomY" },
        legend: {
          type: "Legend",
          position: "right",
          scrollable : true,
        },
        // scrollbarX: { type: "XYChartScrollbar", scrollbarX: "scrollbarX" },
        yAxes: [{ type: "CategoryAxis", renderer: { minGridDistance: 20, grid: { location: 0 } }, dataFields: { category: "category" } }],
        xAxes: [{ type: "ValueAxis" }],
      };
      const charts = [
        [ 'Omzet/jaar',  '/chart/omzet/jaar' ],
        [ 'Orders/jaar',  '/chart/orders/aantal/jaar' ],
        [ 'Regels/jaar',  '/chart/regels/aantal/jaar' ],
      ];
      function daysIntoYear(date){
        return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
      }
      function chart(elem, path, options) {
        aim.fetch('https://dms.aliconnect.nl/api/v1/abisingen'+path).get().then(([rows]) => {
          console.log(path, rows);
          rows.filter(row => row.category==2022).forEach(row => rows.push({ name: row.name, category: String(row.category)+'*', value: Math.round(row.value * factor) }));
          elem.chart(rows, options);
        });
        return elem;
      }
      $('.page>aside.right').text('');
      $('.page>div').class('').text('').append(
        // $('script').text('#legenddiv{color:red !important;}'),
        charts.map(([title,path]) => [
          $('h1').text(title),
          chart($('div').style('display:block;height:10cm;border:solid 1px gray;'), path, options),
        ]),
      );
    },

    async demoGraph1(){
      $('.page>aside.right').text('');
      $('.page>div').class('').text('').append(
        $('div')
        .style('display:block;height:100%;width:100%;position:absolute;border:solid 1px gray;')
        .graph(await aim.fetch('https://dms.aliconnect.nl/api/v1/demo/graph1').get()),
      )
    },
    async demoThree1(){
      const data = await aim.fetch('https://dms.aliconnect.nl/api/v1/abisingen/maglayout').get();
      const [rows] = await aim.fetch('https://dms.aliconnect.nl/api/v1/abisingen/analyse/maganalyse').get();
      data.pickpos = rows.map(row => Object({
        pos: row.maglokatie.split('.'),
        color: 0xff0000,
      }))
      $('.page>aside.right').text('');
      $('.page>div').class('').text('').append(
        $('div')
        .style('display:block;height:100%;width:100%;position:absolute;')
        .three(data),
      );
    },
    /**

    */
    async demoMaps(){
      $('.page>aside.right').text('');
      $('.page>div').class('').text('').append(
        $('div')
        .style('height:600px')
        .googleMaps(googleMapsRows),
      );
    },
    async demoMapsRoute(){
      $('.page>aside.right').text('');
      $('.page>div').class('').text('').append(
        $('div')
        .style('height:600px')
        .googleMapsRoute(googleMapsRows),
        $('div').class('pv'),
      );
    },
    async demoFactuur(){
    },
    async demoPayform(){
    },
    async demoPaypal(){
    },
    async demoIdeal(){
    },
    async aanmelden(){

    },

  });
});
