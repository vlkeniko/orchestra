import Musician from "../utils/musicianClass.js";
export default class View {
  constructor(controller) {
    const self = this;
    const idSearchForm = document.getElementById("idSearchForm");
    const searchForm = document.getElementById("searchForm");
    const idField = document.getElementById("idField");
    const id = document.getElementById("id");
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const instrument = document.getElementById("instrument");
    const seniority = document.getElementById("seniority");
    const residence = document.getElementById("residence");
    const showAllMusiciansButton = document.getElementById(
      "showAllMusiciansButton"
    );
    const musicianDialogForm = document.getElementById("musicianDialogForm");
    const addMusicianButton = document.getElementById("addMusicianButton");
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

    //Advanced Search
    searchForm.onsubmit = function (e) {
      e.preventDefault();
      const optimalMusician = new Musician(
        id.value,
        firstname.value,
        lastname.value,
        instrument.value,
        seniority.value,
        residence.value
      );
      console.log(optimalMusician);

      self.controller.search(optimalMusician);
      searchPanel.classList.remove("searchPanelAnim");
    };

    panelText.onclick = function () {
      searchPanel.classList.add("searchPanelAnim");
    };

    closeCross.onclick = function () {
      searchPanel.classList.remove("searchPanelAnim");
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
        firstname: document.getElementById("firstnamefield").value,
        lastname: document.getElementById("lastnamefield").value,
        instrument: document.getElementById("instrumentfield").value,
        seniority: document.getElementById("seniorityfield").value,
        residence: document.getElementById("residencefield").value,
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

  snackbar(snackmessage) {
    // Bindings to the snackbar
    const snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = snackmessage;
    snackbar.className = "show";
    setTimeout(function () {
      snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
  }
}
