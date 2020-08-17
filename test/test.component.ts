import { Component, OnInit } from '@angular/core';
//import {timestamp} from "rxjs/internal/operators";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  inputText = 'Text for translate';
  translateText = '';

  ngOnInit(): void {
  }

  inputHandler(value) {
      this.inputText = value;
  }

  translate() {
    //console.log(this.inputText);
    this.translateText = this.inputText;
  }

  save() {
      let date = new Date();
      let _key = date.getTime().toString();

      let obj = {
          inputText: this.inputText,
          outputText: this.translateText
      };

      localStorage.setItem(_key, JSON.stringify(obj));
  }

}
