import Musician from "../utils/musicianClass.js";
export default class View {
  constructor(controller) {
    const self = this;
    const idSearchForm = document.getElementById("idSearchForm");
    const idField = document.getElementById("idField");
    /*     const id = document.getElementById("id");
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const instrument = document.getElementById("instrument");
    const seniority = document.getElementById("seniority");
    const residence = document.getElementById("residence"); */
    const showAllMusiciansButton = document.getElementById(
      "showAllMusiciansButton"
    );
    const musicianDialogForm = document.getElementById("musicianDialogForm");
    const addMusicianButton = document.getElementById("AddMusicianButton");
    const musicianDialog = document.getElementById("musicianDialog");
    const cancelButton = document.getElementById("cancelButton");
    const searchResult = document.getElementById("searchResult");
    const hiddenIdField = document.getElementById("hiddenIdField");
    const confirmDialogForm = document.getElementById("confirmDialogForm");
    const confirmDialog = document.getElementById("confirmDialog");
    const cancelConfirmBtn = document.getElementById("cancelConfirmBtn");

    self.controller = controller;

    //Show all musicians
    showAllMusiciansButton.onclick = function () {
      self.controller.showAllMusicians();
    };

    //Id searchForm
    idSearchForm.onsubmit = function (e) {
      e.preventDefault();
      self.controller.idSearch(idField.value);
    };



    //Dialog EventHandler
    addMusicianButton.onclick = function () {
      musicianDialogForm.reset();
      musicianDialog.showModal();
    };

    cancelButton.onclick = function () {
      musicianDialog.close();
    };

    musicianDialogForm.onsubmit = function () {
      self.controller.newMusician({
        id: document.getElementById("idfield").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        instrument: document.getElementById("instrument").value,
        seniority: document.getElementById("seniority").value,
        residence: document.getElementById("residence").value,
      });
    };

    searchResult.onclick = function (e) {
      if (e.target.nodeName === "BUTTON") {
        hiddenIdField.value = e.target.id;
        confirmDialog.showModal();
      }
    };

    cancelConfirmBtn.onclick = function () {
      confirmDialog.close();
    };

    confirmDialogForm.onsubmit = function () {
      //deleting the musician stored in the hidden snfield
      self.controller.deleteMusician(hiddenIdField.value);
      //then showing all musicians
      self.controller.showAllMusicians;
    };
  }

  message(template) {
    const element = document.getElementById("searchResult");
    element.innerHTML = ""; //Resets the result output element
    element.insertAdjacentHTML("beforeend", template);
  }
}
