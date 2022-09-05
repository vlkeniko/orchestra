export default class Controller {
  initialize(model, view) {
    this.model = model;
    this.view = view;
  }

  buildTemplate(musician) {
    return `<div class="cardbox">
        <div class="card">
        <p class="id">${musician.getId}</p>
        <p class="name">${musician.getFirstname} + ${musician.getLastname}</p>
        <p class="instrument">${musician.getInstrument}</p>
        <p class="seniority">${musician.getSeniority}</p>
        <p class="residence">${musician.getResidence}</p>
        </div>
        </div>
        `;
  }

  idSearch(id) {
    const musician = this.model.musicianList.getMusician(id);
    let template = "";

    if (musician !== null) {
      template = this.build;
    }
  }
}
