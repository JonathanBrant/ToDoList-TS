// Importando estilos
import "./style.css";
import "material-icons/iconfont/material-icons.css";

import Tarefa from "./models/Tarefa";

window.onload = function () {
  let button = document.querySelector("form button");
  let input = <HTMLInputElement>document.getElementById("tf_2do");

  function tarefas(tarefa: Tarefa) {
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    let tdCheck = document.createElement("td");
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    let tdText = document.createElement("td");
    let tdPriority = document.createElement("td");
    let tdDelete = document.createElement("td");

    table.appendChild(tr);
    tr.appendChild(tdCheck);
    tdCheck.appendChild(check);
    check.addEventListener("change", () => {
      tr.classList.toggle("done");
    });

    tr.appendChild(tdText);
    tdText.innerHTML = input.value;

    tr.appendChild(tdPriority);
    if (tarefa.prioridade == 1) {
      tdPriority.innerHTML = `[baixa]`;
    } else if (tarefa.prioridade == 2) {
      tdPriority.innerHTML = `[média]`;
    } else if (tarefa.prioridade == 3) {
      tdPriority.innerHTML = `[alta]`;
    }

    tr.appendChild(tdDelete);
    tdDelete.innerHTML = `<i class="material-icons">delete</i>`;
    tdDelete.addEventListener("click", () => {
      tr.remove();
    });
  }
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let regex = /#[1-3]\s/;
    // let prioridadeRegex = input.value.match(regex);
    // let p = 1;

    // if (prioridadeRegex) {
    //   p = Number(prioridadeRegex[0][1]);
    //   input.value = input.value.replace(regex, "");
    // }

    const tarefaAdicionada: Tarefa = {
      feita: false,
      texto: input.value,
    };
    tarefas(tarefaAdicionada);
  });
};