import { Section } from 'src/models/section';

/* eslint-disable max-len */
export const restaurantMenu: Section[] = [
  {
    title: 'Hamburger',
    url: 'hamburger',
    icon: 'burger.png',
    images:['lecantinedelduca/ristorante/hamburger-01.png','lecantinedelduca/ristorante/hamburger-02.png'],
  },
  {
    title: 'Antipasti',
    url: 'antipasti',
    icon: 'starter.png',
    dishes: [
      {name: 'Pallotte cacio e ova', description: '3 pz', price: '6,00'},
      {name: 'Pizza e minestra', description: '', price: '7,00'},
      {name: 'Selezione di Formaggi', description: '(consigliato per 2 persone)', price: '12,00'},
      {name: 'Tagliere del Duca', description: 'Tagliere accompagnato da antipasti caldi (consigliato per 2 persone)', price: '25,00'},
      {name: 'Tagliere di salumi e formaggi', description: '(consigliato per 2 persone)', price: '18,00'},
      {name: 'Tagliere di salumi', description: '(consigliato per 2 persone)', price: '15,00'},
    ]
  },
  { title: 'Primi', url: 'primi', icon: 'primi.png',
    dishes: [
      {name: 'Cavatello di nonna mia', description: 'Ragù cotto a fuoco lento per 24h', price: '9,00'},
      {name: 'Mezze zite allo scarpariello', description: '', price: '9,00'},
      {name: 'Ravioli al radicchio con fonduta di gorgonzola e speck croccante', description: '', price: '10,00'},
      {name: 'Tonnarello del Duca', description: 'Fonduta di caciocavallo, spigatelli e crumble di guanciale', price: '10,00'},
      {name: 'Tortello al capriolo con fungo porcino', description: '', price: '10,00'},
    ]  },
    { title: 'Secondi', url: 'secondi', icon: 'secondi.png',
    dishes: [
      {name: 'Caciocavallo arrosto miele e noci', description: '', price: '8,00'},
      {name: 'Entrecotes al gorgonzola ca. 250/270g', description: '', price: '18,00'},
      {name: 'Filetto di vitellino ca.220g al pepe verde', description: '', price: '18,00'},
      {name: 'Filetto di vitellino ca.220g sale e rosmarino con patatine dippers', description: '', price: '18,00'},
      {name: 'Straccetti di vitello al balsamico con rucola e scaglie', description: '', price: '10,00'},
      {name: 'Tagliata al sale rosa e rosmarino ca. 300g con patatine dippers', description: '', price: '16,00'},
      {name: 'Tagliata tricolore ca. 300g', description: 'Rucola, pomodorini pachino, scaglie di grana', price: '16,00'},
    ]  },
    { title: 'Contorni', url: 'contorni', icon: 'contorni.png',
    dishes: [
      {name: 'Bruschette al pomodoro 4 pezzi', description: '', price: '3,00'},
      {name: 'Bruschette con caciocavallo impiccato 4 pezzi', description: '2 semplici 2 tartufate', price: '4,00'},
      {name: 'Bruschette miste 4 pezzi', description: '', price: '3,50'},
      {name: 'Contorni del giorno', description: '', price: '3,00'},
      {name: 'Crocchette di patate **', description: '', price: 'cad. €1,50', cad:true},
      {name: 'Mozzarelline panate 5 pezzi **', description: '', price: '2,50'},
      {name: 'Olive all\'ascolana 5 pezzi **', description: '', price: '2,50'},
      {name: 'Patate fritte \"Le Cantine\" *', description: '', price: '3,00'},
      {name: 'Patatine fritte**', description: '', price: '3,00'},
      {name: 'Polpettine di melanzane 4 pezzi**', description: '', price: '3,00'},
    ],
    extraInfo:[
      '* Secondo la disponibilità di patate fresche',
      '** Prodotto surgelato',
      '*** All\'occorrenza il prodotto potrebbe essere congelato'
    ]
   },
    { title: 'Insalate', url: 'insalate', icon: 'salad.png',
    dishes: [
      {name: 'Insalata di rucola, pomodorino pachino, scaglie di grana', description: '', price: '4,00'},
      {name: 'Insalata mista piccola', description: '', price: '3,00'},
      {name: 'Insalatona di straccetti', description: 'Insalata verde, rucola, pomodorino pachino, straccetti di vitello, scaglie di grana', price: '8,50'},
      {name: 'Insalatona di tonno', description: 'Insalata verde, rucola, radicchio, pomodorino pachino, tonno, cipolla', price: '6,00'},
      {name: 'Insalatona mista grande', description: '', price: '4,50'},
    ], },
    // TODO: Aggiungere descrizione sotto il titolo
    // ""
    { title: 'Pizze rosse', url: 'pizze_rosse', icon: 'pizza_slice.png',
    dishes: [
      {name: 'Margherita', description: 'Pomodoro, Fior di latte, basilico', price: '6,00'},
      {name: 'Campagnola', description: 'Pomodoro, Fior di latte, fagioli, guanciale, prezzemolo', price: '9,00'},
      {name: 'Capricciosa', description: 'Pomodoro, Fior di latte, funghi, carciofi, prosciutto cotto, olive', price: '8,00'},
      {name: 'Diavola', description: 'Pomodoro, Fior di latte, salsiccia piccante', price: '7,50'},
      {name: 'Funghi', description: 'Pomodoro, Fior di latte, funghi', price: '7,50'},
      {name: 'Marinara', description: 'Pomodoro, origano', price: '5,50'},
      {name: 'Napoli', description: 'Pomodoro, alici, origano', price: '6,00'},
      {name: 'Prosciutto', description: 'Pomodoro, Fior di latte, prosciutto', price: '7,50'},
      {name: 'Super Diavola', description: 'Pomodoro, Fior di latte, salsiccia piccante, peperoni', price: '8,50'},
      {name: 'Tonno', description: 'Pomodoro, Fior di latte, tonno e cipolla', price: '8,00'},
      {name: 'Viennese', description: 'Pomodoro, Fior di latte, würstel', price: '7,50'},
    ],  },
    { title: 'Pizze bianche', url: 'pizze_bianche', icon: 'pizza_slice.png',
    dishes: [
      {name: '4 Formaggi', description: 'Fior di latte, gorgonzola, pecorino, caciocavallo', price: '8,00'},
      {name: 'Americana', description: 'Fior di latte, wrustel, patatine fritte', price: '8,00'},
      {name: 'Carbonara', description: 'Fior di latte, guanciale, pecorino, uovo, pepe nero', price: '8,50'},
      {name: 'Crostino', description: 'Pizza con crudo dentro e sopra rucola e pomodorini', price: '9,00'},
      {name: 'Guanciale', description: 'Fior di latte, guanciale, pecorino romano', price: '8,50'},
      {name: 'Gustosa', description: 'Fior di latte, gorgonzola, porchetta', price: '10,00'},
      {name: 'Marcus', description: 'Fior di latte, funghi, pomodorino, speck', price: '9,00'},
      {name: 'Ortolana', description: 'Fior di latte, melanzane, zucchine, peperoni', price: '7,50'},
      {name: 'Parigina', description: 'Fior di latte, crudo di Parma D.O.P.', price: '9,00'},
      {name: 'Trentina', description: 'Fior di latte, funghi, radicchio, speck', price: '9,00'},
      {name: 'Trevigiana', description: 'Fior di latte, gorgonzola, radicchio, speck', price: '9,00'},
      {name: 'Tricolore', description: 'Fior di latte, rucola, pomodorini, scaglie di grana', price: '8,00'},
    ], },
    { title: 'Pizze Speciali', url: 'pizze_speciali', icon: 'pizza_slice.png',
    dishes: [
      {name: 'Affumicata', description: 'Fior di latte, zucchine grattugiate, salmone affumicato', price: '9,50'},
      {name: 'Al Centro del Mare', description: 'Una pinsa ripassata al forno con bufala, acciughe del Cantabrico e grattugiata di limone', price: '10,50'},
      {name: 'Estate', description: 'Pinsa bianca con crudo di parma, rucola, scaglie di grana', price: '9,50'},
      {name: 'Gamberone', description: 'Fior di latte, gamberoni al vapore e caponatina estiva', price: '10,50'},
      {name: 'In Piazza', description: 'Pinsa bianca condita con prosciuttella, pistacchio di Bronte e stracciata', price: '8,50'},
      {name: 'La Caprese', description: 'Pomodoro cuore di bue, mozzarella di bufala, crema di pomodorini, origano e basilico. Una versione quasi da ristorante, con il pomodoro cuore di bue tagliato finissimo aggiunto in cottura, che crea una salsa leggera. La pizza viene poi completata, in uscita, da tutti altri ingredienti', price: '8,50'},
      {name: 'La Partenopea', description: 'Pinsa bianca condita con pesto di basilico, provola, alici, peperoncino e un filo d’olio extravergine d’oliva completata all’uscita con scorza di limone', price: '7,50'},
      {name: 'Mare Mosso', description: 'Tonno, mozzarella di bufala, pomodorino e olive nere', price: '9,00'},
    ], },
    { title: 'Birre alla spina', url: 'birre', icon: 'beer.png',
    dishes: [
      {name: 'Bitburger 0,3l', icon: '/lecantinedelduca/ristorante/bitburger.png', description: '', price: '3,00'},
      {name: 'Bitburger 0,5l', icon: '/lecantinedelduca/ristorante/bitburger.png', description: '', price: '5,00'},
      {name: 'Bitburger 1L', icon: '/lecantinedelduca/ristorante/bitburger.png', description: '', price: '10,00'},
      {name: 'Crew Republic 0,3l', icon: '/lecantinedelduca/ristorante/crew.png', description: 'Birra rossa', price: '3,50'},
      {name: 'Köstritzer nera 0,3l', icon: '/lecantinedelduca/ristorante/kostrizer.png', description: '', price: '3,50'},
      {name: 'Lupulus Blanche 0,3l', icon: '/lecantinedelduca/ristorante/lupulus.webp', description: 'Birra bianca', price: '3,50'},
      ], },
    { title: 'Bevande', url: 'bevande', icon: 'drinks.png',
    dishes: [
      {name: 'Acqua Molisia 75cl', description: 'Frizzante', price: '2,00'},
      {name: 'Acqua Molisia 75cl', description: 'Naturale', price: '2,00'},
      {name: 'Coca Cola 1L', description: '', price: '5,00'},
      {name: 'Coca Cola 33cl vetro', description: '', price: '2,50'},
      {name: 'Fanta 33cl vetro', description: '', price: '2,50'},
      {name: 'Sprite 33cl vetro', description: '', price: '2,50'},
      ], },
    { title: 'Caffè e Amari', url: 'caffe', icon: 'coffee.png',
    dishes: [
      {name: 'Caffè', description: '', price: '1,50'},
      {name: 'Amari', description: '', price: '2,50'},
      {name: 'Grappa', description: '', price: '3,00'},
      {name: 'Grappa barricata', description: '', price: '3,50'},
      ] },
    {
      title: 'Lista Allergeni',
      url: 'allergeni',
      icon: 'info.png',
      images:['lecantinedelduca/ristorante/allergeni.png'],
    },
];
