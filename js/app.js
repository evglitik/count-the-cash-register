const containerForm = document.querySelector(".container-form");
const form = document.querySelector(".form-caunt");
const shortTable = document.querySelector(".js-short-table");

const containerTable = document.querySelector(".table-generet");
const fullTable = document.querySelector(".calcul-full-table");

const fullTableMobBtn = document.querySelector(".js-full-table");

form.addEventListener("submit", cauntSubmit);

const inputValue = {};

function cauntSubmit(e) {
  e.preventDefault();
  const formValue = e.target.elements;

  inputValue.atpCard = formValue.atp_card.value;
  inputValue.cash = formValue.cash.value;
  inputValue.pdvV = formValue.pdv_v.value;
  inputValue.usageD = formValue.usage_d.value;
  inputValue.pdvD = formValue.pdv_d.value;

  cauntValue(inputValue);
}

function cauntValue({ atpCard, cash, pdvV, usageD, pdvD }) {
  const graph5 = (Number(cash) + Number(atpCard)).toFixed(2);
  const graph6 = (Number(graph5) - Number(usageD)).toFixed(2);
  const graph8 = (Number(graph6) / 6 + Number(pdvV) + Number(pdvD)).toFixed(2);

  const table = `<table class="js-results-table">
      <thead>
        <tr>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>${graph5}</td>
            <td>${graph6}</td>
            <td>${usageD}</td>
            <td>${graph8}</td>
        </tr>
      </tbody>
    </table>`;

  containerTable.innerHTML = table;
  form.classList.add("its-hidden-table");
}

// creat full table
// ================
fullTableMobBtn.addEventListener("click", creatFormFullTable);

function creatFormFullTable() {
  form.classList.add("its-hidden-table");
  closeMenu();
  generateFullTable();
  fullTableMobBtn.classList.add("chose-this");
  shortTable.classList.remove("chose-this");
}

function generateFullTable() {
  fullTable.classList.remove("its-hidden-table");
  containerTable.innerHTML = "";
}

// count full table

fullTable.addEventListener("submit", cauntSubmitFull);

function cauntSubmitFull(e) {
  e.preventDefault();
  const formValue = e.target.elements;

  inputValue.atpCard = formValue.atp_card.value;
  inputValue.cash = formValue.cash.value;
  inputValue.pdvV = formValue.pdv_v.value;
  inputValue.usageD = formValue.usage_d.value;
  inputValue.pdvD = formValue.pdv_d.value;

  inputValue.date = formValue.date.value;
  inputValue.servis_on = formValue.servis_on.value;
  inputValue.servis_off = formValue.servis_off.value;
  inputValue.gate_d = formValue.gate_d.value;
  inputValue.callbeack_cash = formValue.callbeack_cash.value;
  inputValue.nomber_report = formValue.nomber_report.value;

  cauntValueFull(inputValue);
}

function cauntValueFull({
  atpCard,
  callbeack_cash,
  cash,
  date,
  gate_d,
  pdvD,
  pdvV,
  servis_off,
  servis_on,
  usageD,
  nomber_report,
}) {
  const graph5 = (Number(cash) + Number(atpCard)).toFixed(2);
  const graph6 = (Number(graph5) - Number(usageD)).toFixed(2);
  const graph8 = (Number(graph6) / 6 + Number(pdvV) + Number(pdvD)).toFixed(2);

  const table = `
  <table class="js-results-table table-first">
      <thead>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>${date}</td>
            <td>${nomber_report}</td>
            <td>${servis_on}</td>
            <td>${servis_off}</td>
        </tr>
      </tbody>
    </table>

  <table class="js-results-table">
      <thead>
        <tr>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
          <th>9</th>
          <th>10</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>${graph5}</td>
            <td>${graph6}</td>
            <td>${usageD}</td>
            <td>${graph8}</td>

            <td>${gate_d}</td>
            <td>${callbeack_cash}</td>
        </tr>
      </tbody>
    </table>`;

  containerTable.innerHTML = table;
  fullTable.classList.add("its-hidden-table");
}

// menu коротка таблиця

shortTable.addEventListener("click", () => {
  fullTable.classList.add("its-hidden-table");
  form.classList.remove("its-hidden-table");
  containerTable.innerHTML = "";
  closeMenu();
  fullTableMobBtn.classList.remove("chose-this");
  shortTable.classList.add("chose-this");
});

// ===============MOBAIL MENU===========

const refs = {
  btnBurger: document.querySelector(".btn-burger"),
  mobailMenu: document.querySelector(".container-hidden-mob"),
  btnBurgerClosse: document.querySelector(".btn-burger-closse"),
  sectionCalcul: document.querySelector(".container-hidden-mob"),
};

refs.btnBurger.addEventListener("click", openMobMenu);
refs.btnBurgerClosse.addEventListener("click", closeMenu);

function openMobMenu(e) {
  refs.mobailMenu.classList.remove("its-hidden");

  refs.sectionCalcul.addEventListener("click", (e) => {
    if (e.target === refs.sectionCalcul) {
      closeMenu();
    }
  });
}

function closeMenu() {
  refs.mobailMenu.classList.add("its-hidden");
}
