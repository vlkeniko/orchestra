import Inventory from "../utils/methodClass.js";

export default class Model {
  constructor() {
    this.musicianList = new Inventory();
    this.musicianList.addMusician(
      "12121212",
      "John",
      "Smith",
      "Violin",
      "Five years",
      "Aarhus"
    );
    this.musicianList.addMusician(
      "13131313",
      "Ana",
      "Bustos",
      "Viola",
      "Four years",
      "Aarhus"
    );
    this.musicianList.addMusician(
      "14141414",
      "Giulia",
      "Ivan",
      "Percussion",
      "Ten years",
      "Aarhus"
    );
    this.musicianList.addMusician(
      "15151515",
      "Zuzanna",
      "Spaingebob",
      "cello",
      "Two years",
      "Aarhus"
    );
  }
}
