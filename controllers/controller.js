export default class Controller {
  initialize(model, view) {
    this.model = model;
    this.view = view;
  }

  buildTemplate(musician) {
    return `<div class="cardbox">
        <div class="card">
        <p class="id">${musician.getId()}</p>
        <p class="name">${musician.getFirstname()} ${musician.getLastname()}</p>
        <p class="instrument">${musician.getInstrument()}</p>
        <p class="seniority">${musician.getSeniority()}</p>
        <p class="residence">${musician.getResidence()}</p>
        </div>
        </div>
        `;
  }

  //ID search

  idSearch(id) {
    const musician = this.model.musicianList.getMusician(id);
    let template = "";

    if (musician !== null) {
      template = this.build;
    } else {
      template = `<div class="cardbox"><p class="nothing">Nothing to show here</p></div>`;
    }
    this.view.message(template);
  }

  //Advanced Search
  search(searchMusician) {
    const musician = this.model.musicianList.search(searchMusician);
    let template = "";
    console.log(musician);
    if (musician !== null) {
      template = this.buildTemplate(musician);
    } else {
      template = `
           <p>No musician</p>`;
    }
    this.view.message(template);
  }

  //Show all Musicians
  showAllMusicians() {
    let template = "";
    for (const musician of this.model.musicianList.allMusicians()) {
      template += this.buildTemplate(musician);
    }
    this.view.message(template);
  }

  //New Musician

  newMusician(musician) {
    const doesMusicianAlreadyExist = this.model.musicianList.getMusician(
      musician.id
    );
    if (doesMusicianAlreadyExist === null) {
      this.model.musicianList.addMusician(
        musician.id,
        musician.firstname,
        musician.lastname,
        musician.instrument,
        musician.seniority,
        musician.residence
      );
      this.view.snackbar("The new Guitar was saved");
    } else {
        this.view.snackbar("The Guitar already exists");
      }
  }

  //Delete a musician
  deleteMusician(id) {
    this.model.musicianList.deleteMusician(id);
    this.view.snackbar("The guitar was deleted!");
  }
}
