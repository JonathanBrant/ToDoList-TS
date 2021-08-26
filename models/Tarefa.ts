import uniqid from '../node_modules/uniqid/index'

export class Tarefa {
  feita: boolean;
  texto: string;
  prioridade?: Prioridade;
  id: string;

  constructor(t: string, p: Prioridade) {
    this.id = uniqid();
    this.texto = t;
    this.prioridade = p;
    this.feita = false;
  }

  imprimir(): void {
    // [ ] ________________ [prioridade]
    console.log(
      `[${this.feita ? "X" : " "}]  ${this.texto}  [${this.prioridade}]`
    );
  }

  toRow(): HTMLTableRowElement {
    let tr: HTMLTableRowElement = document.createElement("tr");
    tr.setAttribute("id", this.id)

    tr.className = this.feita ? "done" : "";
    tr.innerHTML = `
                    <td><input type="checkbox"></td>
                    <td>${this.texto}</td>
                    <td><i class="material-icons">delete</i>
                    `;
    let checkbox = tr.querySelector("input");
    checkbox.addEventListener("change", () => {
      this.feita = checkbox.checked;
      tr.className = this.feita ? "done" : "";
    });
    return tr;
  }
}

export enum Prioridade {
  alta = 3,
  media = 2,
  baixa = 1,
}
