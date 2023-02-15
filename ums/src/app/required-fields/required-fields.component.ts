import { Component, Input, OnInit } from '@angular/core';
import { faCheckCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-required-fields',
  templateUrl: './required-fields.component.html',
  styleUrls: ['./required-fields.component.css']
})
export class RequiredFieldsComponent implements OnInit {

  @Input() nomeItem: any;

  faCheck = faCheckCircle;
  faXmark = faXmarkCircle;

  constructor() { }

  ngOnInit(): void {
    debugger;

  }

}
