/* eslint-disable max-len */
import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  public appPages = [
    { title: 'Antipasti', url: 'antipasti', icon: 'mail',
    dishes: [
      {name: 'Tagliere del Duca', description: '(consigliato per 2 persone)', price: '16,00'},
      {name: 'Tagliere di salumi', description: '(consigliato per 2 persone)', price: '12,00'},
      {name: 'Selezione di Formaggi', description: '(consigliato per 2 persone)', price: '10,00'},
    ] },
    { title: 'Secondi', url: 'secondi', icon: 'paper-plane',
    dishes: [
      {name: 'Straccetti di vitello al balsamico con rucola e scaglie', description: '', price: '10,00'},
      {name: 'Tagliata tricolore ca. 300g', description: 'Rucola, pomodorini pachino, scaglie di grana', price: '15,00'},
      {name: 'Entrecotes al gorgonzola ca. 250/270g', description: '', price: '15,00'},
      {name: 'Tagliata al sale rosa e rosmarino ca. 300g con patatine dippers', description: '', price: '14,00'},
      {name: 'Filetto di vitellino ca.220g al pepe verde', description: '', price: '18,00'},
      {name: 'Filetto di vitellino ca.220g sale e rosmarino con patatine dippers', description: '', price: '18,00'},
      {name: 'Caciocavallo arrosto miele e noci', description: '', price: '7,00'},
    ]  },
    { title: 'Contorni', url: 'contorni', icon: 'heart',
    dishes: [
      {name: 'Contorni del giorno', description: '', price: '3,00'},
      {name: 'Patatine fritte dippers**', description: '', price: '2,50'},
      {name: 'Patate fritte \"Le Cantine\" *', description: '', price: '2,50'},
      {name: 'Crocchette di patate **', description: '', price: 'cad.€1,00'},
      {name: 'Mozzarelline panate 5 pezzi **', description: '', price: '2,00'},
      {name: 'Olive all\'ascolana 5 pezzi **', description: '', price: '2,00'},
      {name: 'Polpettine di melanzane 4 pezzi**', description: '', price: '2,50'},
      {name: 'Bruschette al pomodoro 4 pezzi', description: '', price: '3,00'},
      {name: 'Bruschette miste 4 pezzi', description: '', price: '3,50'},
      {name: 'Bruschette con caciocavallo impiccato 4 pezzi', description: '2 semplici 2 tartufate', price: '4,00'},
      {name: 'Polpettine di melanzane 4 pezzi**', description: '', price: '2,50'},
      {name: 'Polpettine di melanzane 4 pezzi**', description: '', price: '2,50'},
      {name: 'Polpettine di melanzane 4 pezzi**', description: '', price: '2,50'},
    ],
    extraInfo:[
      '* Secondo la disponibilità di patate fresche',
      '** Prodotto surgelato',
      '*** All\'occorrenza il prodotto potrebbe essere congelato'
    ]
   },
    { title: 'Insalate', url: 'insalate', icon: 'archive',
    dishes: [
      {name: 'Insalata mista piccola', description: '', price: '3,00'},
      {name: 'Insalatona mista grande', description: '', price: '4,50'},
      {name: 'Insalata di rucola, pomodorino pachino, scaglie di grana', description: '', price: '3,00'},
      {name: 'Insalatona di tonno', description: 'Insalata verde, rucola, radicchio, pomodorino pachino, tonno, cipolla', price: '6,00'},
      {name: 'Insalatona di straccetti', description: 'Insalata verde, rucola, pomodorino pachino, straccetti di vitello, scaglie di grana', price: '7,50'},
    ], },
    { title: 'Pinse rosse', url: 'pinse_rosse', icon: 'trash',
    dishes: [
      {name: 'Napoli', description: 'Pomodoro, alici, origano', price: '5,50'},
      {name: 'Marinara', description: 'Pomodoro, origano', price: '4,00'},
      {name: 'Margherita', description: 'Pomodoro, Fior di latte, basilico', price: '5,00'},
      {name: 'Campagnola', description: 'Pomodoro, Fior di latte, fagioli, guanciale, prezzemolo', price: '7,50'},
      {name: 'Tonno', description: 'Pomodoro, Fior di latte, tonno e cipolla', price: '7,00'},
      {name: 'Capricciosa', description: 'Pomodoro, Fior di latte, funghi, carciofi, prosciutto cotto, olive', price: '7,00'},
      {name: 'Diavola', description: 'Pomodoro, Fior di latte, salsiccia piccante', price: '6,00'},
      {name: 'Super Diavola', description: 'Pomodoro, Fior di latte, salsiccia piccante, peperoni', price: '7,00'},
    ],  },
    { title: 'Pinse bianche', url: 'pinse_bianche', icon: 'warning',
    dishes: [
      {name: '4 Formaggi', description: 'Fior di latte, gorgonzola, pecorino, caciocavallo', price: '7,00'},
      {name: 'Americana', description: 'Fior di latte, wrustel, patatine fritte', price: '7,00'},
      {name: 'Gustosa', description: 'Fior di latte, gorgonzola, salsiccia fresca', price: '7,00'},
      {name: 'Ortolana', description: 'Fior di latte, melanzane, zucchine, peperoni', price: '7,00'},
      {name: 'Guanciale', description: 'Fior di latte, guanciale, pecorino romano', price: '7,00'},
      {name: 'Parigina', description: 'Fior di latte, crudo di Parma D.O.P.', price: '7,00'},
      {name: 'Marcus', description: 'Fior di latte, funghi, pomodorino, speck', price: '7,00'},
      {name: 'Tricolore', description: 'Fior di latte, rucola, pomodorini, scaglie di grana', price: '7,00'},
      {name: 'Carbonara', description: 'Fior di latte, guanciale, pecorino, uovo, pepe nero', price: '7,00'},
      {name: 'Trentina', description: 'Fior di latte, funghi, radicchio, speck', price: '7,00'},
      {name: 'Trevigiana', description: 'Fior di latte, gorgonzola, radicchio, speck', price: '7,00'},
    ], },
    { title: 'Pinse Speciali', url: 'pinse_speciali', icon: 'warning',
    dishes: [
      {name: 'Gamberone', description: 'Fior di latte, gamberoni al vapore e caponatina estiva', price: '10,00'},
      {name: 'Affumicata', description: 'Fior di latte, zucchine grattugiate, salmone affumicato', price: '9,00'},
      {name: 'La Caprese', description: 'Pomodoro cuore di bue, mozzarella di bufala, crema di pomodorini, origano e basilico. Una versione quasi da ristorante, con il pomodoro cuore di bue tagliato finissimo aggiunto in cottura, che crea una salsa leggera. La pizza viene poi completata, in uscita, da tutti altri ingredienti', price: '8,00'},
      {name: 'La Roast Beef', description: 'Rucola, roast beef, limone, pepe, burrata e crema di aceto balsamico di Modena', price: '8,00'},
      {name: 'Estate', description: 'Pinsa bianca con crudo di parma, rucola, scaglie di grana', price: '8,50'},
      {name: 'Mare Mosso', description: 'Tonno, mozzarella di bufala, pomodorino e olive nere', price: '8,00'},
      {name: 'In Piazza', description: 'Pinsa bianca condita con prosciuttella, pistacchio di Bronte e stracciata', price: '8,00'},
      {name: 'La Partenopea', description: 'Pinsa bianca condita con pesto di basilico, provola, alici, peperoncino e un filo d’olio extravergine d’oliva completata all’uscita con scorza di limone', price: '7,00'},
      {name: 'Al Centro del Mare', description: 'Una pinsa ripassata al forno con bufala, acciughe del Cantabrico e grattugiata di limone', price: '10,00'},
    ], },
    { title: 'Birre alla spina', url: 'birre', icon: 'warning',
    dishes: [
      {name: 'Bitburger 0.2cL', description: '', price: '1,50'},
      {name: 'Bitburger 0.3cL', description: '', price: '2,20'},
      {name: 'Bitburger 0.5cL', description: '', price: '3,50'},
      {name: 'Bitburger 1L', description: '', price: '7,00'},
      ], },
    { title: 'Bevande', url: 'bevande', icon: 'warning',
    dishes: [
      {name: 'Acqua San Pellegrino 75cL', description: '', price: '2,00'},
      {name: 'Acqua Panna 75cL', description: '', price: '2,00'},
      {name: 'Acqua Ferrarelle 75cL', description: '', price: '2,00'},
      {name: 'Coca Cola 1L', description: '', price: '4,00'},
      {name: 'Coca Cola 33cL vetro', description: '', price: '2,00'},
      {name: 'Fanta 33cL vetro', description: '', price: '2,00'},
      {name: 'Sprite 33cL vetro', description: '', price: '2,00'},
      ], },
    { title: 'Caffè e Amari', url: 'caffe', icon: 'warning',
    dishes: [
      {name: 'Caffè', description: '', price: '1,00'},
      {name: 'Amari', description: '', price: '2,50'},
      {name: 'Grappa', description: '', price: '2,50'},
      {name: 'Grappa barricata', description: '', price: '3,50'},
      ] },
    { title: 'Lista Allergeni', url: 'allergeni', icon: 'warning' },
  ];
  constructor() {}

}
