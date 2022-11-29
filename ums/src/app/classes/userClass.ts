import { UserInterface } from "../interfaces/userInterface";

export class UserClass implements UserInterface {
  id: number;
  nome: string;
  cognome: string;
  email: string;
  codicefiscale: string;
  cellulare: string;
  provincia: string;
  eta: number;

  constructor() {
    this.id = 0;
    this.nome = '';
    this.cognome = '';
    this.email = '';
    this.codicefiscale = '';
    this.cellulare = '';
    this.provincia = '';
    this.eta = 18;
  }
}
