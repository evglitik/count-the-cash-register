// Элементы
const refs = {
  // section
  sectionSmallForm: document.querySelector(".s-form-small"),
  sectionFullForm: document.querySelector(".s-form-full"),
  sectionGas: document.querySelector(".s-gas"),
  // forms
  formSmall: document.querySelector(".form-small"),
  formFulll: document.querySelector(".form-full"),
  formGass: document.querySelector(".form-gas"),
  // mobail menu
  mobBtnOn: document.querySelector(".btn-burger"),
  mobBtnClosse: document.querySelector(".btn-burger-closse"),
  containerMobailMenu: document.querySelector(".container-hidden-mob"),
  //mobail list
  itemSmallForm: document.querySelector(".js-short-table"),
  itemFullForm: document.querySelector(".js-full-table"),
  itemGas: document.querySelector(".js-gas"),
  // Generait result container
  containerForGeneraitResult: document.querySelector(".generete-result"),
};

// SUBMIT FORMS

// small form
refs.sectionSmallForm.addEventListener("submit", cauntSubmit);

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

// full form
refs.sectionFullForm.addEventListener("submit", cauntSubmitFull);

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

// gas form

refs.formGass.addEventListener("submit", cauntGas);

function cauntGas(e) {
  e.preventDefault();

  const formValue = e.target.elements;
  const gassValue = {
    liters_ttn: formValue.liters.value,
    density_ttn: formValue.density_ttn.value,
    density_fakt: formValue.density_fakt.value,
  };

  getCauntGas(gassValue);
}

// ===============MOBAIL MENU===========
refs.mobBtnOn.addEventListener("click", openMobMenu);
refs.mobBtnClosse.addEventListener("click", closeMenu);

function openMobMenu(e) {
  refs.containerMobailMenu.classList.remove("its-hidden");
  refs.containerMobailMenu.addEventListener("click", (e) => {
    if (e.target === refs.containerMobailMenu) {
      closeMenu();
    }
  });
}

function closeMenu() {
  refs.containerMobailMenu.classList.add("its-hidden");
}

// MOBAILL MENU BUTTONS AND TRANSPERENT

// 1. Small Form
refs.itemSmallForm.addEventListener("click", goSmallForm);

function goSmallForm() {
  closeMenu();
  destoyAllTable();

  hidenOffFullForm();
  hidenOffGasForm();

  hidenOnSmallForm();

  refs.itemFullForm.classList.remove("chose-this");
  refs.itemSmallForm.classList.add("chose-this");
  refs.itemGas.classList.remove("chose-this");
}

// 2. Full form

refs.itemFullForm.addEventListener("click", goFullForm);

function goFullForm() {
  closeMenu();
  destoyAllTable();

  hidenOffSmallForm();
  hidenOffGasForm();
  hidenOnFullForm();

  // подсветка меню
  refs.itemFullForm.classList.add("chose-this");
  refs.itemSmallForm.classList.remove("chose-this");
  refs.itemGas.classList.remove("chose-this");
}

// 3. Gass form
refs.itemGas.addEventListener("click", goGasForm);

function goGasForm() {
  closeMenu();
  destoyAllTable();

  hidenOffFullForm();
  hidenOffSmallForm();
  hidenOnGasForm();

  refs.itemFullForm.classList.remove("chose-this");
  refs.itemSmallForm.classList.remove("chose-this");
  refs.itemGas.classList.add("chose-this");
}

// Hidden or not?
function hidenOnFullForm() {
  refs.sectionFullForm.classList.remove("its-hidden-elment");
}

function hidenOffFullForm() {
  refs.sectionFullForm.classList.add("its-hidden-elment");
}

function hidenOnSmallForm() {
  refs.sectionSmallForm.classList.remove("its-hidden-elment");
}

function hidenOffSmallForm() {
  refs.sectionSmallForm.classList.add("its-hidden-elment");
}

function hidenOnGasForm() {
  refs.sectionGas.classList.remove("its-hidden-elment");
}

function hidenOffGasForm() {
  refs.sectionGas.classList.add("its-hidden-elment");
}

function destoyAllTable() {
  refs.containerForGeneraitResult.innerHTML = "";
}

// Логика подсчетов
function cauntValue({ atpCard, cash, pdvV, usageD, pdvD }) {
  const graph5 = (Number(cash) + Number(atpCard)).toFixed(2);
  const graph6 = (Number(graph5) - Number(usageD)).toFixed(2);
  const graph8 = (Number(graph6) / 6 + Number(pdvV) + Number(pdvD)).toFixed(2);

  const table = `<div class="container"><table class="js-results-table">
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
    </table></div>`;

  refs.containerForGeneraitResult.innerHTML = table;
  hidenOffSmallForm();
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

  const table = `<div class="container">
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
    </table></div>`;

  refs.containerForGeneraitResult.innerHTML = table;
  hidenOffFullForm();
}

function getCauntGas({ liters_ttn, density_ttn, density_fakt }) {
  const weight_ttnMath = Math.round(Number(liters_ttn) * Number(density_ttn));
  const weight_factMath = Math.round(Number(liters_ttn) * Number(density_fakt));
  const liters_factMath = Math.round(weight_factMath / Number(density_ttn));
  const difference = Math.round(Number(liters_ttn) - liters_factMath);
  let pictures = "";

  const messeg = {
    messeg: "",
    classCss: "",

    warningImg:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9Im5taSIgY2xpcC1ydWxlPSJldmVub2RkIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0icmdiYSgwLDAsMCwuMikiIGQ9Ik0yMS45MSAzLjQ4bDE3LjggMzAuODljLjg0IDEuNDYtLjIzIDMuMjUtMS45MSAzLjI1SDIuMmMtMS42OCAwLTIuNzUtMS43OS0xLjkxLTMuMjVsMTcuOC0zMC44OWMuODUtMS40NyAyLjk3LTEuNDcgMy44MiAwem0xNi4xNSAzMS44NEwyMC4yNiA0LjQzYS4zLjMgMCAwIDAtLjUyIDBMMS45NCAzNS4zMmMtLjEyLjIuMDUuNC4yNi40aDM1LjZjLjIxIDAgLjM4LS4yLjI2LS40ek0xOS4wNSAzMS4ydi0xLjA1YzAtLjUzLjQyLS45NS45NS0uOTVzLjk1LjQyLjk1Ljk1djEuMDVjMCAuNTMtLjQyLjk1LS45NS45NXMtLjk1LS40Mi0uOTUtLjk1em0wLTQuNjZWMTMuMTVhLjk1Ljk1IDAgMSAxIDEuOSAwdjEzLjM5YzAgLjUzLS40Mi45Ni0uOTUuOTZzLS45NS0uNDMtLjk1LS45NnoiIGNsYXNzPSJmaWwwIi8+PC9zdmc+",
    okImg:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9Im5taSIgY2xpcC1ydWxlPSJldmVub2RkIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0icmdiYSgwLDAsMCwuMikiIGQ9Ik0yMCAwYzExLjAzIDAgMjAgOC45NyAyMCAyMHMtOC45NyAyMC0yMCAyMFMwIDMxLjAzIDAgMjAgOC45NyAwIDIwIDB6bTAgMzcuOThjOS45MiAwIDE3Ljk4LTguMDYgMTcuOTgtMTcuOThTMjkuOTIgMi4wMiAyMCAyLjAyIDIuMDIgMTAuMDggMi4wMiAyMCAxMC4wOCAzNy45OCAyMCAzNy45OHptLTIuNC0xMy4yOWwxMS41Mi0xMi45NmExLjAxIDEuMDEgMCAwIDEgMS40Mi0uMDggMSAxIDAgMCAxIC4wOSAxLjQyTDE4LjQ3IDI2Ljc0YS45OC45OCAwIDAgMS0uNzUuMzRjLS4yMyAwLS40NS0uMDctLjYzLS4yMmwtNy42LTYuMDdjLS40My0uMzUtLjUtLjk5LS4xNi0xLjQyLjM1LS40My45OS0uNSAxLjQyLS4xNmw2Ljg1IDUuNDh6IiBjbGFzcz0iZmlsMCIvPjwvc3ZnPg==",
    errorImg:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9Im5taSIgY2xpcC1ydWxlPSJldmVub2RkIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0icmdiYSgwLDAsMCwuMikiIGQ9Ik0yMCAwYzExLjAzIDAgMjAgOC45NyAyMCAyMHMtOC45NyAyMC0yMCAyMFMwIDMxLjAzIDAgMjAgOC45NyAwIDIwIDB6bTAgMzcuOThjOS45MiAwIDE3Ljk4LTguMDYgMTcuOTgtMTcuOThTMjkuOTIgMi4wMiAyMCAyLjAyIDIuMDIgMTAuMDggMi4wMiAyMCAxMC4wOCAzNy45OCAyMCAzNy45OHpNMjEuNDIgMjBsNi4xMyA2LjEyYy4zOS40LjM5IDEuMDQgMCAxLjQzLS4xOS4xOS0uNDUuMjktLjcxLjI5LS4yNyAwLS41My0uMS0uNzItLjI5TDIwIDIxLjQybC02LjEzIDYuMTNhLjk5Ljk5IDAgMCAxLS43MS4yOS45OS45OSAwIDAgMS0uNzEtLjI5IDEuMDIgMS4wMiAwIDAgMSAwLTEuNDNMMTguNTggMjBsLTYuMTMtNi4xM2MtLjM5LS4zOS0uMzktMS4wMyAwLTEuNDIuMzktLjM5IDEuMDMtLjM5IDEuNDIgMEwyMCAxOC41N2w2LjEyLTYuMTJjLjQtLjM5IDEuMDQtLjM5IDEuNDMgMCAuMzkuMzkuMzkgMS4wMyAwIDEuNDJMMjEuNDIgMjB6IiBjbGFzcz0iZmlsMCIvPjwvc3ZnPg==",
  };

  if (difference < 0) {
    messeg.messeg = `Фактическа разница больше заявленной на ${Math.abs(
      difference
    )} литров 😀.`;
    messeg.classCss = "gass-result-ok";
    pictures = messeg.okImg;
  } else if (difference > 0 && difference < 10) {
    messeg.messeg = `Ой! Фактическа разница меньше заявленной на ${difference} литров 😐!`;
    messeg.classCss = "gass-result-warning";
    pictures = messeg.warningImg;
  } else if (difference > 10) {
    messeg.messeg = `Внимание! Фактическа разница меньше заявленной на ${difference} литров 😠!`;
    messeg.classCss = "gass-result-error";
    pictures = messeg.errorImg;
  } else if (difference === 0) {
    messeg.messeg = `Фактической разницы нет 😉.`;
    messeg.classCss = "gass-result-ok";
    pictures = messeg.okImg;
  }

  const table = `<div class="container"><table class="js-results-table">
      <thead>
        <tr>
          <th>Показатели</th>
          <th>По ТТН</th>
          <th>Факт</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td class="td-stolb">Плотность</td>
            <td>${density_ttn}</td>
            <td>${density_fakt}</td>
        </tr>
        <tr>
            <td class="td-stolb">Лтров</td>
            <td>${liters_ttn}</td>
            <td>${liters_factMath}</td>
        </tr>
        <tr>
            <td class="td-stolb">Масса</td>
            <td>${weight_ttnMath}</td>
            <td>${weight_factMath}</td>
        </tr>
      </tbody>
    </table>
    <div class="messeg-gas ${messeg.classCss}">
        <img
          alt="root"
          width="40"
          height="40"
          src=${pictures}
        />
    <span>${messeg.messeg}</div></span>
    </div>`;

  refs.containerForGeneraitResult.innerHTML = table;
  hidenOffGasForm();
}
