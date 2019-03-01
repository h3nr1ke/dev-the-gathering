'use strict'; 
const GraphQLObject = require('../utils/GraphQLObject.js');

class Cards extends GraphQLObject{
    constructor(){
        super();

        // singleton implementation
        if(! GraphQLObject.instance){
            GraphQLObject.instance = this;
        }
        return GraphQLObject.instance;
    }

    getCard(args){
        this.cards = [
            {"object":"card","id":"9f71d5d2-49a5-4d5c-a218-8f0634c57d94","oracle_id":"b2c6aa39-2d2a-459c-a555-fb48ba993373","multiverse_ids":[],"name":"Island","lang":"en","released_at":"2019-02-16","uri":"https://api.scryfall.com/cards/9f71d5d2-49a5-4d5c-a218-8f0634c57d94","scryfall_uri":"https://scryfall.com/card/prw2/2/island?utm_source=api","layout":"normal","highres_image":true,"image_uris":{"small":"https://img.scryfall.com/cards/small/front/9/f/9f71d5d2-49a5-4d5c-a218-8f0634c57d94.jpg?1548387613","normal":"https://img.scryfall.com/cards/normal/front/9/f/9f71d5d2-49a5-4d5c-a218-8f0634c57d94.jpg?1548387613","large":"https://img.scryfall.com/cards/large/front/9/f/9f71d5d2-49a5-4d5c-a218-8f0634c57d94.jpg?1548387613","png":"https://img.scryfall.com/cards/png/front/9/f/9f71d5d2-49a5-4d5c-a218-8f0634c57d94.png?1548387613","art_crop":"https://img.scryfall.com/cards/art_crop/front/9/f/9f71d5d2-49a5-4d5c-a218-8f0634c57d94.jpg?1548387613","border_crop":"https://img.scryfall.com/cards/border_crop/front/9/f/9f71d5d2-49a5-4d5c-a218-8f0634c57d94.jpg?1548387613"},"mana_cost":"","cmc":0.0,"type_line":"Basic Land — Island","oracle_text":"({T}: Add {U}.)","colors":[],"color_identity":["U"],"legalities":{"standard":"legal","future":"legal","frontier":"legal","modern":"legal","legacy":"legal","pauper":"legal","vintage":"legal","penny":"legal","commander":"legal","duel":"legal","oldschool":"not_legal"},"games":["paper"],"reserved":false,"foil":true,"nonfoil":false,"oversized":false,"promo":true,"reprint":true,"set":"prw2","set_name":"RNA Ravnica Weekend","set_uri":"https://api.scryfall.com/sets/ee3a8eb6-0583-492b-8be5-265795d38038","set_search_uri":"https://api.scryfall.com/cards/search?order=set\u0026q=e%3Aprw2\u0026unique=prints","scryfall_set_uri":"https://scryfall.com/sets/prw2?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/9f71d5d2-49a5-4d5c-a218-8f0634c57d94/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3Ab2c6aa39-2d2a-459c-a555-fb48ba993373\u0026unique=prints","collector_number":"2","digital":false,"rarity":"common","watermark":"azorius","illustration_id":"a041f3fb-e716-4953-bcb3-68a3c01922db","artist":"Alayna Danner","border_color":"black","frame":"2015","frame_effect":"","full_art":false,"story_spotlight":false,"related_uris":{"tcgplayer_decks":"https://decks.tcgplayer.com/magic/deck/search?contains=Island\u0026page=1\u0026partner=Scryfall\u0026utm_campaign=affiliate\u0026utm_medium=scryfall\u0026utm_source=scryfall","edhrec":"http://edhrec.com/route/?cc=Island","mtgtop8":"http://mtgtop8.com/search?MD_check=1\u0026SB_check=1\u0026cards=Island"}},
            {"object":"card","id":"8004052e-cb88-4ca6-a563-5396f13f7c6d","oracle_id":"bc71ebf6-2056-41f7-be35-b2e5c34afa99","multiverse_ids":[],"name":"Plains","lang":"en","released_at":"2019-02-16","uri":"https://api.scryfall.com/cards/8004052e-cb88-4ca6-a563-5396f13f7c6d","scryfall_uri":"https://scryfall.com/card/prw2/1/plains?utm_source=api","layout":"normal","highres_image":true,"image_uris":{"small":"https://img.scryfall.com/cards/small/front/8/0/8004052e-cb88-4ca6-a563-5396f13f7c6d.jpg?1548387716","normal":"https://img.scryfall.com/cards/normal/front/8/0/8004052e-cb88-4ca6-a563-5396f13f7c6d.jpg?1548387716","large":"https://img.scryfall.com/cards/large/front/8/0/8004052e-cb88-4ca6-a563-5396f13f7c6d.jpg?1548387716","png":"https://img.scryfall.com/cards/png/front/8/0/8004052e-cb88-4ca6-a563-5396f13f7c6d.png?1548387716","art_crop":"https://img.scryfall.com/cards/art_crop/front/8/0/8004052e-cb88-4ca6-a563-5396f13f7c6d.jpg?1548387716","border_crop":"https://img.scryfall.com/cards/border_crop/front/8/0/8004052e-cb88-4ca6-a563-5396f13f7c6d.jpg?1548387716"},"mana_cost":"","cmc":0.0,"type_line":"Basic Land — Plains","oracle_text":"({T}: Add {W}.)","colors":[],"color_identity":["W"],"legalities":{"standard":"legal","future":"legal","frontier":"legal","modern":"legal","legacy":"legal","pauper":"legal","vintage":"legal","penny":"legal","commander":"legal","duel":"legal","oldschool":"not_legal"},"games":["paper"],"reserved":false,"foil":true,"nonfoil":false,"oversized":false,"promo":true,"reprint":true,"set":"prw2","set_name":"RNA Ravnica Weekend","set_uri":"https://api.scryfall.com/sets/ee3a8eb6-0583-492b-8be5-265795d38038","set_search_uri":"https://api.scryfall.com/cards/search?order=set\u0026q=e%3Aprw2\u0026unique=prints","scryfall_set_uri":"https://scryfall.com/sets/prw2?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/8004052e-cb88-4ca6-a563-5396f13f7c6d/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3Abc71ebf6-2056-41f7-be35-b2e5c34afa99\u0026unique=prints","collector_number":"1","digital":false,"rarity":"common","watermark":"azorius","illustration_id":"91ebbb9c-1326-4a06-a469-2796cb5c8bd6","artist":"Alayna Danner","border_color":"black","frame":"2015","frame_effect":"","full_art":false,"story_spotlight":false,"related_uris":{"tcgplayer_decks":"https://decks.tcgplayer.com/magic/deck/search?contains=Plains\u0026page=1\u0026partner=Scryfall\u0026utm_campaign=affiliate\u0026utm_medium=scryfall\u0026utm_source=scryfall","edhrec":"http://edhrec.com/route/?cc=Plains","mtgtop8":"http://mtgtop8.com/search?MD_check=1\u0026SB_check=1\u0026cards=Plains"}}
        ];
        if (args.id) {
            var id = args.id;
            return this.cards.filter(_card => _card.id === id);
        } else {
            return this.cards;
        }
    }

    getRoot(){
        return {
            card: this.getCard
        }
    }

}

var cards = new Cards();

// schema for a card
var schema = `
        type Query {
            card(id: String): [Card]
        },
        type ImageUris{
            small: String
            normal: String
            large: String
            png: String
            art_crop: String
            border_crop: String
        },
        type Legalities{
            standard: String
            future: String
            frontier: String
            modern: String
            legacy: String
            pauper: String
            vintage: String
            penny: String
            commander: String
            duel: String
            oldschool: String
        },
        type RelatedUris{
            gatherer: String
            tcgplayer_decks: String
            edhrec: String
            mtgtop8: String
        },
        type Card {
            object: String
            id: String
            oracle_id: String
            multiverse_ids: [Int]
            name: String
            printed_name: String
            lang: String
            released_at: String
            uri: String
            scryfall_uri: String
            layout: String
            highres_image: Boolean
            image_uris: ImageUris
            mana_cost: String
            cmc: Int
            type_line: String
            printed_type_line: String
            oracle_text: String
            printed_text: String
            power: String
            toughness: String
            colors: [String]
            color_identity: [String]
            legalities: Legalities
            games: [String]
            reserved: Boolean
            foil: Boolean
            nonfoil: Boolean
            oversized: Boolean
            promo: Boolean
            reprint: Boolean
            set: String
            set_name: String
            set_uri: String
            set_search_uri: String
            scryfall_set_uri: String
            rulings_uri: String
            prints_search_uri: String
            collector_number: String
            digital: Boolean
            rarity: String
            flavor_text: String
            illustration_id: String
            artist: String
            border_color: String
            frame: String
            frame_effect: String
            full_art: Boolean
            story_spotlight: Boolean
            edhrec_rank: Int
        }
    `;
cards.setSchema(schema);

module.exports = cards;
