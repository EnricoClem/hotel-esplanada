import { reactive } from 'vue';

export const store = reactive({
    allRooms: [
        {
            name: "rooms-single",
            mq: "12,50 mq",
            balcony: ["5 mq", "rooms-chairs", "rooms-table", "rooms-drying-rack"],
            persons: "1",
            cover: "room-single.jpg",
            services: ["rooms-bed", "rooms-bathroom", "rooms-tv", "rooms-ac", "rooms-safe"]
        }, {
            name: "rooms-classic",
            mq: "21 mq",
            balcony: ["6,80 mq", "rooms-chairs", "rooms-table", "rooms-drying-rack"],
            persons: "2-3",
            cover: "room-classic.jpg",
            services: ["rooms-bed", "rooms-bathroom", "rooms-clothes", "rooms-tv", "rooms-ac", "rooms-safe"]
        }, {
            name: "rooms-superior",
            mq: "21 mq",
            balcony: ["6,80 mq", "rooms-chairs", "rooms-table", "rooms-drying-rack"],
            persons: "2-3",
            cover: "room-superior.jpg",
            services: ["rooms-bed", "rooms-bathroom", "rooms-clothes", "rooms-tv", "rooms-ac", "rooms-safe"]
        }, {
            name: "rooms-fam-a",
            mq: "32 mq",
            balcony: ["7 mq", "rooms-chairs", "rooms-table", "rooms-drying-rack"],
            persons: "4-5",
            cover: "room-fam-a.jpg",
            services: ["rooms-beds", "rooms-bathroom", "rooms-clothes", "rooms-tv", "rooms-ac", "rooms-safe"]
        }, {
            name: "rooms-fam-b",
            mq: "32 mq",
            balcony: ["7 mq", "rooms-chairs", "rooms-table", "rooms-drying-rack"],
            persons: "4-5",
            cover: "room-fam-b.jpg",
            services: ["rooms-entrance", "rooms-beds", "rooms-bathroom", "rooms-tv", "rooms-ac", "rooms-safe"]
        }, {
            name: "rooms-junior",
            mq: "26 mq",
            balcony: ["10 mq", "rooms-chairs", "rooms-table", "rooms-sun-lounger", "rooms-drying-rack"],
            persons: "2-4",
            cover: "room-junior.jpg",
            services: ["rooms-bed", "rooms-bathroom", "rooms-couch", "rooms-tv", "rooms-ac", "rooms-safe"]
        }, {
            name: "rooms-pan",
            mq: "26 mq",
            balcony: ["15 mq", "rooms-chairs", "rooms-table", "rooms-sun-lounger", "rooms-drying-rack"],
            persons: "2-3",
            cover: "room-panoramic.jpg",
            services: ["rooms-bed", "rooms-bathroom", "rooms-couch", "rooms-tv", "rooms-ac", "rooms-safe"]
        }, {
            name: "rooms-pan-classic",
            mq: "18,50-21 mq",
            balcony: ["9 mq", "rooms-chairs", "rooms-table", "rooms-sun-lounger", "rooms-drying-rack"],
            persons: "2-3",
            cover: "room-panoramic-classic.jpg",
            services: ["rooms-bed", "rooms-bathroom", "rooms-tv", "rooms-ac", "rooms-safe"]
        }, {
            name: "rooms-pan-plus",
            mq: "34 mq",
            balcony: ["40 mq", "rooms-chairs", "rooms-table", "rooms-sun-lounger", "rooms-drying-rack"],
            persons: "2-4",
            cover: "room-panoramic-plus.jpg",
            services: ["rooms-bed", "rooms-bathroom", "rooms-couch", "rooms-tv", "rooms-ac", "rooms-safe"]
        },
    ],
    allServices: [
        {
            name: "service-food",
            text: "service-text-food",
            image: "service-ristorazione.jpg"
        }, {
            name: "service-bar",
            text: "service-text-bar",
            image: "service-bar.jpg"
        }, {
            name: "service-beach",
            text: "service-text-beach",
            image: "service-spiaggia.jpg"
        }, {
            name: "service-pool",
            text: "service-text-pool",
            image: "service-piscina.jpg"
        }, {
            name: "service-bike",
            text: "",
            image: "service-bici.jpg"
        }, {
            name: "service-gym",
            text: "",
            image: "service-palestra.jpg"
        }, {
            name: "service-parking",
            text: "service-text-parking",
            image: "service-parcheggio.jpg"
        }, {
            name: "service-meet",
            text: "service-text-meet",
            image: "service-ricevimento.jpg"
        }, {
            name: "service-tennis",
            text: "service-text-tennis",
            image: "service-tennis.jpg"
        }, {
            name: "service-park",
            text: "service-text-park",
            image: "service-parco.jpg"
        }, {
            name: "service-junior",
            text: "service-text-junior",
            image: "service-junior.jpg"
        }, {
            name: "service-baby",
            text: "service-text-baby",
            image: "service-baby.jpg"
        }, 
    ]
})