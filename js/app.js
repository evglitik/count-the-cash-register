console.log("hi");

const containerForm = document.querySelector(".container-form");
const form = document.querySelector(".form-caunt");
const containerTable = document.querySelector(".table-generet");
// const btnCaunt = document.querySelector()
form.addEventListener("submit", cauntSubmit);

const inputValue = {};

function cauntSubmit(e) {
  e.preventDefault();
  const formValue = e.target.elements;

  inputValue.cash = formValue.cash.value;
  inputValue.atpCard = formValue.atp_card.value;
  inputValue.usageD = formValue.usage_d.value;
  inputValue.pdvD = formValue.pdv_d.value;
  inputValue.pdvV = formValue.pdv_v.value;

  cauntValue(inputValue);

  //   console.log(inputValue);
}

function cauntValue({ cash, atpCard, usageD, pdvD, pdvV }) {
  const graph5 = (Number(cash) + Number(atpCard)).toFixed(2);
  const graph6 = (Number(graph5) - Number(usageD)).toFixed(2);

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
            <td>${(Number(graph6) / 6 + Number(pdvV) + Number(pdvD)).toFixed(
              2
            )}</td>
        </tr>
      </tbody>
    </table>`;

  console.log(table);
  containerTable.innerHTML = table;
  containerForm.innerHTML = "";
}
