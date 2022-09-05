export default class Musician {
  constructor(id, firstname, lastname, instrument, seniority, residence) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.instrument = instrument;
    this.seniority = seniority;
    this.residence = residence;
  }

  //Methods

  getID() {
    return this.id;
  }

  getFirstname() {
    return this.firstname;
  }

  getLastname() {
    return this.lastname;
  }

  getInstrument() {
    return this.instrument;
  }

  getSeniority() {
    return this.seniority;
  }

  getResidence() {
    return this.residence;
  }
}
