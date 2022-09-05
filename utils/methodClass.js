import Musician from "./musicianClass.js";

export default class Inventory {
  constructor() {
    this.musicians = [];
  }
  //Add a musician
  addMusician(id, firstname, lastname, instrument, seniority, residence) {
    const newMusician = new Musician(
      id,
      firstname,
      lastname,
      instrument,
      seniority,
      residence
    );
    this.musicians.push(newMusician);
    this.allMusicians();
  }
  // Search by id
  getMusician(id) {
    for (const musician of this.musicians) {
      if (id === musician.id) {
        return musician;
      }
    }
    return null;
  }

  //Returns a list of musicians
  allMusicians() {
    return this.musicians;
  }

  //Delete Musician
  deleteMusician(id) {
    const index = this.musicians.map((musician) => musician.id).indexOf(id);
    this.guitars.splice(index, 1);
  }
}
