const EventEmitter = require('events');

class Blog extends EventEmitter {
  constructor() {
    super();
    this.articoli = [];
    this.contatoreArticoli = 0;
  }

  pubblicaArticolo(titolo, autore) {
    const articolo = {
      id: this.articoli.length + 1,
      titolo: titolo,
      autore: autore,
      data: new Date()
    };

    this.articoli.push(articolo);
    this.contatoreArticoli++;
    this.emit('nuovo', articolo);
  }
}

const blog = new Blog();

blog.on('nuovo', function(articolo) {
  console.log('Test 1' + articolo.titolo);
});

blog.on('nuovo', function(articolo) {
  console.log('Test 2' + blog.contatoreArticoli);
});

blog.on('nuovo', function(articolo) {
  console.log('Test 3' + articolo.titolo + ' da ' + articolo.autore);
});

blog.pubblicaArticolo('Articolo1', 'Agata Cristi');

blog.pubblicaArticolo('Articolo2', 'Spillberg');

blog.pubblicaArticolo('Articolo3', 'Lucone');

