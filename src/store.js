import { reactive } from 'vue';

export const store = reactive({
    allRooms: [
        {
            name: "SINGOLA CLASSIC",
            mq: "12,50 mq",
            balcony: ["5 mq", "Sedie", "Tavolino", "stendino"],
            persons: "1",
            cover: "room-single.jpg",
            services: ["Camera da letto", "Bagno con doccia", "Televisione", "Aria condizionata", "Cassaforte"]
        }, {
            name: "CLASSIC",
            mq: "21 mq",
            balcony: ["6,80 mq", "Sedie", "Tavolino", "stendino"],
            persons: "2-3",
            cover: "room-classic.jpg",
            services: ["Camera da letto", "Bagno con doccia", "Guardaroba", "Televisione", "Aria condizionata", "Cassaforte"]
        }, {
            name: "SUPERIOR",
            mq: "21 mq",
            balcony: ["6,80 mq", "Sedie", "Tavolino", "stendino"],
            persons: "2-3",
            cover: "room-superior.jpg",
            services: ["Camera da letto", "Bagno con doccia", "Guardaroba", "Televisione", "Aria condizionata", "Cassaforte"]
        }, {
            name: "FAMILY SUITE tipo A",
            mq: "32 mq",
            balcony: ["7 mq", "Sedie", "Tavolino", "stendino"],
            persons: "4-5",
            cover: "room-fam-a.jpg",
            services: ["2 camere da letto", "Bagno con doccia", "Guardaroba", "Televisione", "Aria condizionata", "Cassaforte"]
        }, {
            name: "FAMILY SUITE tipo B",
            mq: "32 mq",
            balcony: ["7 mq", "Sedie", "Tavolino", "stendino"],
            persons: "4-5",
            cover: "room-fam-b.jpg",
            services: ["Ingresso", "2 camere da letto", "Bagno con doccia", "Televisione", "Aria condizionata", "Cassaforte"]
        }, {
            name: "JUNIOR SUITE",
            mq: "26 mq",
            balcony: ["10 mq", "Sedie", "Tavolino", "Lettino prendisole", "stendino"],
            persons: "2-4",
            cover: "room-junior.jpg",
            services: ["Camera da letto", "Bagno con doccia", "Salottino", "Televisione", "Aria condizionata", "Cassaforte"]
        }, {
            name: "PANORAMIC",
            mq: "26 mq",
            balcony: ["15 mq", "Sedie", "Tavolino", "Lettino prendisole", "stendino"],
            persons: "2-3",
            cover: "room-panoramic.jpg",
            services: ["Camera da letto", "Bagno con doccia", "Salottino", "Televisione", "Aria condizionata", "Cassaforte"]
        }, {
            name: "PANORAMIC CLASSIC",
            mq: "18,50-21 mq",
            balcony: ["9 mq", "Sedie", "Tavolino", "Lettino prendisole", "stendino"],
            persons: "2-3",
            cover: "room-panoramic-classic.jpg",
            services: ["Camera da letto", "Bagno con doccia", "Televisione", "Aria condizionata", "Cassaforte"]
        }, {
            name: "PANORAMIC PLUS",
            mq: "34 mq",
            balcony: ["40 mq", "Sedie", "Tavolino", "Lettino prendisole", "stendino"],
            persons: "2-4",
            cover: "room-panoramic-plus.jpg",
            services: ["Camera da letto", "Bagno con doccia", "Salottino", "Televisione", "Aria condizionata", "Cassaforte"]
        },
    ],
    allServices: [
        {
            name: "RISTORAZIONE",
            text: "Nella veranda, inserita tra il gruppo piscine ed il parco, il servizio della prima colazione, del pranzo e della cena diventano un'esperienza unica. La mattina troverete degli ampi e variegati buffet che soddisfano sia gli amanti del dolce che gli appassionati dei gusti salati. A pranzo potrete gustare piatti gourmet, con servizio alla carta. A cena, oltre ai ricchi buffet di antipasti, verdure e primi piatti, vi sorprenderemo con piatti di carne e pesce cucinati, sul barbecue esterno, preparati davanti a voi dai nostri chef.",
            image: "service-ristorazione.jpg"
        }, {
            name: "COFFE & AMERICAN BAR",
            text: "Dalle 10,00 della mattina fino a mezzanotte, troverete i nostri barman pronti a soddisfare le vostre richieste di caffetteria, long drink e cocktail.",
            image: "service-bar.jpg"
        }, {
            name: "SPIAGGIA",
            text: "La spiaggia di Bibione Pineda è un'esperienza unica nel suo genere. La sabbia finissima e pulita, la tranquillità ed allo stesso tempo un ambiente naturale incontaminato e ben preservato, ne fanno una delle perle del Mar Adriatico. I clienti del Grand Hotel Esplanada hanno un settore riservato unicamente per loro. Per ogni camera dell'hotel è prevista l'assegnazione gratuita (escluse le prime due file con supplemento) di un ombrellone e due lettini.",
            image: "service-spiaggia.jpg"
        }, {
            name: "PISCINA",
            text: "La piscina è di recente realizzazione ed è dotata dei più moderni sistemi di depurazione, per garantite una perfetta qualità dell'acqua. Le vasche sono suddivise in tre settori: il principale dedicato al nuoto libero, con una profondità massima di cm 150, la parte riservata agli ospiti più piccoli di soli cm 40 ed infine di un'area idromassaggio. Troverete a disposizione comodissimi lettini prendisole e sdraie.",
            image: "service-piscina.jpg"
        }, {
            name: "BICICLETTE",
            text: "",
            image: "service-bici.jpg"
        }, {
            name: "PALESTRA",
            text: "",
            image: "service-palestra.jpg"
        }, {
            name: "PARCHEGGIO",
            text: "L'automobile o la motocicletta non sono un problema. Presso il Grand Hotel Esplanada potrete trovare un ampio parcheggio, in gran parte coperto. Il servizio è fornito gratuitamente all'interno dell'area dell' hotel, in uno spazio completamente recintato e dotato di video-sorveglianza.",
            image: "service-parcheggio.jpg"
        }, {
            name: "SERVIZI DI RICEVIMENTO",
            text: "Ampia hall con salotti e sala riunioni, ascensore, reception. Il servizio di ricevimento diurno e la portineria notturna è a vostra disposizione ad ogni ora del giorno per esaudire le vostre esigenze e richieste di informazioni.",
            image: "service-ricevimento.jpg"
        }, {
            name: "TENNIS",
            text: "Il campo da tennis è dagli anni '60 il segno distintivo del Grand Hotel Esplanada. In terra rossa, viene curato giornalmente con estrema cura. Le prenotazioni vengono fatte presso il ricevimento (€ 12,00/h). Presso l'hotel potrete trovare una sala fitness attrezzata con macchine Tecnogym. A disposizione gratuita degli ospiti un bel parco biciclette, per le vostre brevi escursioni. In spiaggia troverete un diving center, per tutte le attività acquatiche.",
            image: "service-tennis.jpg"
        }, {
            name: "PARCO",
            text: "Per chi ama rilassarsi avvolto nel verde, è il luogo ideale. Troverete dei gazebo per sedervi all' ombra ed una grande varietà di piante e vegetazione mediterranea.",
            image: "service-parco.jpg"
        }, {
            name: "JUNIOR CLUB",
            text: "Il Junior Club, dedicato ai nostri piccoli ospiti è aperto tutte le sere, senza servizio di animazione.",
            image: "service-junior.jpg"
        }, {
            name: "BABY PARK",
            text: "Il Baby Park, per la gioia di tutti i bambini, è attrezzato con diverse strutture.",
            image: "service-baby.jpg"
        }, 
    ]
})