# DEV THE GATHERING

A tool to search Magic The Gathering Cards and create your own decks lists

All card data is available due the huge and amazing work from (mtgjson.com)[https://mtgjson.com]

The deck structure is the same as defined by mtgjson (here)[https://mtgjson.com/files/deck/]

```
{
    code : "YOUR_CODE",
    mainBoard : [
        cardObjects
    ],
    meta : "T2",
    name : "Your cool deck name",
    sideBoard : [
        cardObjects
    ],
    type : "CUSTOM DECK"
}
```

each card object follow the structure defined [here](https://mtgjson.com/structures/card/)

a full deck example can be found [here](https://mtgjson.com/json/decks/AbzanSiege.json)

## Instalation

    git clone https://github.com/h3nr1ke/dev-the-gathering.git

Install the modules

    npm install

