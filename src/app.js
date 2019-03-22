import {Aprendiendo} from './aprendiendo';


export class App {
  constructor() {
    this.message = 'Manejando Aurelia';
    this.aprendiendos = [];
    this.aprendiendoDescripcion = '';
  }

  add() {
    if (this.aprendiendoDescripcion) {
      this.aprendiendos.push(new Aprendiendo(this.aprendiendoDescripcion));
      this.aprendiendoDescripcion = '';
    }
  }

  remove(aprendiendo) {
    let index = this.aprendiendos.indexOf(aprendiendo);
    if (index !== -1) {
      this.aprendiendos.splice(index, 1);
    }
  }
}
