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
      "Cello",
      "Two years",
      "Aarhus"
    );
    this.musicianList.addMusician(
      "161616",
      "Tamara",
      "Spaingebob",
      "Bass",
      "Four years",
      "Aarhus"
    );
    this.musicianList.addMusician(
      "171717",
      "Klarissa",
      "Spaingebob",
      "Flute",
      "Ten years",
      "Aarhus"
    );

    this.musicianList.addMusician(
      "181818",
      "Dori",
      "Explori",
      "Violin",
      "Ten years",
      "Litvori"
    );

    this.musicianList.addMusician(
      "191919",
      "Eniko",
      "Valko",
      "Triangle",
      "Ten years",
      "Aarhus"
    );
  }
}
