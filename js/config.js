$().config({
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
