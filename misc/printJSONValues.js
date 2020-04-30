const json1 = {
  glossary: {
    title: "example glossary",
    GlossDiv: {
      title: "S",
      GlossList: {
        GlossEntry: {
          ID: "SGML",
          SortAs: "SGML",
          GlossTerm: "Standard Generalized Markup Language",
          Acronym: "SGML",
          Abbrev: "ISO 8879:1986",
          GlossDef: {
            para:
              "A meta-markup language, used to create markup languages such as DocBook.",
            GlossSeeAlso: ["GML", "XML"]
          },
          GlossSee: "markup"
        }
      }
    }
  }
};

const json2 = {
  menu: {
    id: "file",
    value: "File",
    popup: {
      menuitem: [
        {
          value: "New",
          onclick: "CreateNewDoc()"
        },
        {
          value: "Open",
          onclick: "OpenDoc()"
        },
        {
          value: "Close",
          onclick: "CloseDoc()"
        }
      ]
    }
  }
};

const json3 = {
  widget: {
    debug: "on",
    window: {
      title: "Sample Konfabulator Widget",
      name: "main_window",
      width: 500,
      height: 500
    },
    image: {
      src: "Images/Sun.png",
      name: "sun1",
      hOffset: 250,
      vOffset: 250,
      alignment: "center"
    },
    text: {
      data: "Click Here",
      size: 36,
      style: "bold",
      name: "text1",
      hOffset: 250,
      vOffset: 100,
      alignment: "center",
      onMouseUp: "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
  }
};

const json4 = {
  x1: [
    ,
    ,
    {
      x2: [
        ,
        [
          {
            x3: [
              ,
              {
                x4: "Daffodil"
              }
            ]
          }
        ]
      ]
    }
  ]
};

function iterateObject(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") iterateObject(obj[key]);
    else console.log(obj[key]);
  }
}

iterateObject(json4);
