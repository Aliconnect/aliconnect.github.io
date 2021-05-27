(function() {
  $().setconfig({
    client_id: "1-c9b05c80-4d2b-46c1-abfb-0464854dbd9a",
    info: {
      title: "Aliconnect",
      description: "One Source, One Truth",
      version: "1.0.0",
      contact: {
        email: "max.van.kampen@alicon.nl"
      },
      license: {
        name: "Apache 2.0",
        url: "http://www.apache.org/licenses/LICENSE-2.0.html"
      }
    },
    scope: [
      "name",
      "email"
    ],
    client: {
      servers: [
        {
          url: "https://aliconnect.nl/api"
        }
      ]
    },
    ref: {
      script: "https://aliconnect.nl/js/client.js",
      wiki: "https://aliconnect.nl/wiki",
      home: "https://aliconnect.nl",
      twitterName: "AliconnectNL"
    },
  });
  $.extend($, {
    const: {
      prompt: {
        menu: {
          prompts: [
            'qrscan',
            'lang',
            'chat',
            'msg',
            'task',
            'shop',
            'config',
            'help',
          ]
        },
        account: {
          prompts: [
            'set_customer',
            'account_password',
            'account_mobile',
            'account_email',
            'account_domain',
            'account_overview',
            'account_config',
            'login_consent',
            'login_msa',
            'logout',
            'account_delete',
          ]
        },
        config: {
          prompts: [
            'upload_datafile',
            // 'import_outlook_mail',
            // 'import_outlook_contact',
            'account_create',
            'account_domain',
            // 'account_config',
            'sitemap',
            'get_api_key',
            'get_aliconnector_key',
          ]
        },
      }
    },
  });

  $().extend({
    // home() {
    //   $('list').load('/sites/aliconnect/docs/index/Explore/1-Overview.md');
    // },
    dashboard() {
      const panel = $('div').panel();
      $().api('/').query('request_type', 'personal_dashboard_data').get().then(event => {
        panel.elemMain.class('dashboard').append(
          $('div').class('row wrap').append(
            (event.body||[]).map(domain => $('div').append(
              $('h1').append(
                $('a')
                .text(domain.host.keyname)
                .href(
                  `https://${domain.host.keyname}.aliconnect.nl`
                )
              ),
              $('div').text(domain.host.header0 || domain.host.id),
              $('div').text(domain.header0),
            )),
            $('div').append(
              $('h1').text('Nieuw'),
              // $('div').text('U bent aangemeld en bevindt zich op', document.location.hostname),
              $('a').class('abtn account_domain').text('Maak een domein').href('#?prompt=account_domain'),
            ),
            ...[0,0,0,0,0,0,0,0,0].map(a => $('div').class('ghost')),
          )
        )
      })
    },
  })
  .on({
    async ready() {
      $().prompt({
        menu() {
          $('div').class('menu').parent(this.is.text('')).append(
            $('div').class('col')
            .append(
              $('a').class('abtn icn dark').dark(),
              $('a').text('abtn icn dark'),
            )
            .prompts(
              'qrscan',
              'lang',
              'chat',
              'msg',
              'task',
              'shop',
              'config',
              'help',
            )
            .append(
              $.accountElem = $('a').class('abtn account').caption('Account').href('#?prompt=account').draggable(),
            ),
          )
        },
        // account() {
        //   if ($().authProvider().sub) {
        //     $('div').class('menu').parent(this.is.text('')).append(
        //       $('h1').text('Account'),
        //       $('div').class('col').prompts(
        //         // 'account_profile',
        //         // 'contact_profile',
        //         // 'account_page',
        //         'set_customer',
        //         'account_password',
        //         'account_mobile',
        //         'account_email',
        //         'account_domain',
        //         'login_consent',
        //         'login_msa',
        //         'logout',
        //         'account_delete',
        //       ),
        //     )
        //   } else {
        //     $('div').class('menu').parent(this.is.text('')).append(
        //       $('h1').text('Account'),
        //       $('div').class('col').prompts(
        //         'login',
        //       ),
        //     )
        //   }
        // },
      });
      // $().dashboard();
      return;

      console.log('GET STARTED');
      $('div').parent($('list').text('')).class('row doc aco').append(
        this.docElem = $('div').class('aco col doc-content oa'),
        $('div').class('mc-menu right np oa').append(
          $('div').class('ac-header').text('Table of contents'),
          this.indexElem = $('ul')
        ),
      );
      // this.docElem.append(
      //   $('h1').text('Welkom bij uw persoonlijke werkomgeving.'),
      // )
      // if (!$().authProvider().sub) {
      //   this.docElem.append(
      //     $('div').append(
      //       $('button').class('abtn').text('Aanmelden').on(
      //         'click',
      //         event => document.location.href='https://login.aliconnect.nl/';
      //       ),
      //       $('a').text('Maak een account').href(''),
      //     )
      //   )
      //   // this.docElem.append(
      //   //   $('form').class('col aco')
      //   //   .properties({
      //   //     accountname: {
      //   //       type: 'text',
      //   //       autocomplete: 'username',
      //   //       pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$',
      //   //       required: true,
      //   //       autofocus: true,
      //   //     },
      //   //     password: {
      //   //       type: 'password',
      //   //       autocomplete: 'password',
      //   //     },
      //   //   })
      //   //   .btns({
      //   //     next: { caption:'Aanmelden', type:'submit', default: true, tabindex: 2 },
      //   //   })
      //   //   .on('submit', event => $().url('https://login.aliconnect.nl').query('prompt','login').post(event).then(event => {
      //   //     console.log('LOGIN', event.target.responseText);
      //   //   }))
      //   // )
      // }
      $().url('/sites/aliconnect/docs/index/Explore/1-Overview.md').get().then(event => {
				// this.docElem.elem.innerHTML += $.String.md(event.target.responseText);
        this.docElem.mdc(event.target.responseText);
        this.indexElem.index(this.docElem);
			});
      return;
      // return;
      // $().url('/sites/aliconnect/docs/index/Explore/1-Overview.md').get().then(
      //   event => $('div').parent('list').class('doc-content counter').mdc(event.target.responseText)
      // );
      // return;
      const msalConfig = {
        auth: {
          clientId: '4573bb93-5012-4c50-9cc5-562ac8f9a626',
          clientId: '24622611-2311-4791-947c-5c1d1b086d6c',
          redirectUri: 'https://aliconnect.nl/graph/',
          redirectUri: 'http://localhost:8080',
          redirectUri: 'https://aliconnect.nl/om/'
        }
      };
      const msaRequest = {
        scopes: [
          'User.Read',
          'Mailboxsettings.Read',
          'Calendars.ReadWrite',
          'Contacts.ReadWrite',
          'Mail.Read',
          'Notes.ReadWrite.All',
        ]
      }
      aim().msa(msalConfig);

      // aim().navleft('Outlook', {
      //   items: {
      //     Contacts: {
      //       onclick: event => aim().msa().getContacts(),
      //     },
      //     Events: {
      //       onclick: event => aim().msa().getEvents(),
      //     },
      //     Messages: {
      //       onclick: event => aim().msa().getMessages(),
      //     },
      //     Notes: {
      //       onclick: event => aim().msa().getNotes(),
      //     },
      //   }
      // });


      aim().msa().api('/me/contacts').top(900).get().then(response => {
				response.value.forEach(item => aim.Item.toItem(item, 'msaContact'));
				// aim().list(response.value)
			}).catch(error => {
				console.error(error, error);
			});

      // aim().msa().getContacts();

      // console.log('graphUser', JSON.parse(aim().storage('graphUser') || '{}'));
      // console.log('msalAccount', aim().storage('msalAccount'));


    },
  });
})();
