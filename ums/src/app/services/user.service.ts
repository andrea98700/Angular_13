import { Injectable } from "@angular/core";
import { UserClass } from "../classes/userClass";
import { UserInterface } from "../interfaces/userInterface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<UserClass> = [
    {
      id: 1,
      nome: 'ANDREA',
      cognome: 'PIAZZA',
      email: 'abc123@gmail.com',
      codicefiscale: 'PLZHTM23A01H575P',
      cellulare: '5254156464',
      provincia: 'MILANO',
      eta: 24
    },
    {
      id: 2,
      nome: 'ANILA',
      cognome: 'ZANAGA',
      email: 'utrutwu@gmail.com',
      codicefiscale: 'ZNGNLA61E41E483V',
      cellulare: '2545643636',
      provincia: 'LAURIA',
      eta: 32
    },
    {
      id: 3,
      nome: 'CATERINA',
      cognome: 'BIFFI',
      email: 'sgsrthrh@gmail.com',
      codicefiscale: 'BFFCRN41C41Z146A',
      cellulare: '6326536366',
      provincia: 'GUSPINI',
      eta: 34
    },
    {
      id: 4,
      nome: 'ALIOUNE',
      cognome: 'CHOUNDI',
      email: 'ghhthtjt@gmail.com',
      codicefiscale: 'CHNLNA36E01D860K',
      cellulare: '3252465426',
      provincia: 'GAIS',
      eta: 42
    },
    {
      id: 5,
      nome: 'SABRINA',
      cognome: 'FINOTTO',
      email: 'ngndan@gmail.com',
      codicefiscale: 'FNTSRN71H41Z2530E',
      cellulare: '4261641646',
      provincia: 'CASALINO',
      eta: 55
    },
  ]
  getUsers() {
    return this.users;
  }

  deleteUser(user: UserClass) {
    const index = this.users.indexOf(user);
    if(index > -1) {
      this.users.splice(index, 1)
    }
  }

  updateUser(user: UserInterface) {
    const idx = this.users.findIndex(v => v.id === user.id); //se invece di v metto (v), la modifica viene fatta istantaneamente, prima ancora di cliccare sul tasto "salva"
    if(idx !== -1) {
      this.users[idx] = user;
    }
  }

  createUser(user: UserInterface) {
    this.users.splice(0, 0, user);
  }
}
