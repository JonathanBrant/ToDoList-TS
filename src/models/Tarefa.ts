import {Prioridade} from "./Prioridade";

export default interface Tarefa{
    feita:boolean;
    texto:string;
    prioridade?: Prioridade;
}