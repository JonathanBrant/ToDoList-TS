import { Prioridade, Tarefa } from "./Tarefa";

export class ListaDeTarefas {
  tarefas: Tarefa[];
  tabela: HTMLTableElement;
  form: HTMLFormElement;
  input: HTMLInputElement;

  constructor(main: HTMLElement) {
    this.input = <HTMLInputElement>main.querySelector("form input");
    this.form = <HTMLFormElement>main.querySelector("form");
    this.tabela = <HTMLTableElement>main.querySelector("table");
    this.tarefas = [];

    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      let t = new Tarefa(this.input.value, Prioridade.baixa);
      this.adicionarTarefa(t);
    });
  }

  adicionarTarefa(tarefa: Tarefa) {
    if (this.input.value == "") return;   
    this.tarefas.push(tarefa);
    this.mostrarTarefas();
    this.input.value = "";
    console.log(this.tarefas)
  };

  removerTarefa(tarefa: Tarefa) {
    this.tarefas.splice(this.tarefas.indexOf(tarefa), 1);
    this.mostrarTarefas();
    console.log(this.tarefas)
  };
  
  // criarLinha(tarefa: Tarefa):void {
  //   let tr = tarefa.toRow();
  //     tr.querySelector("i").addEventListener("click", () => {
  //       this.removerTarefa(tarefa);
  //     });
  //     this.tabela.appendChild(tr);
  // };

  mostrarTarefas(): void {
    this.tabela.innerHTML = "";
    for (const tarefa of this.tarefas) {
      let tr = tarefa.toRow();
      tr.querySelector("i").addEventListener("click", () => {
        this.removerTarefa(tarefa);
      });
      this.tabela.appendChild(tr);
    }
  };
}
