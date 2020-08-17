import { Component, OnInit } from '@angular/core';

export interface Text {
    key: string;
    inputText: string;
    outputText: string;
    targetLang: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  list: Text[] = [];

  ngOnInit(): void {
    this.fill();
  }

  // вывод списка текстов
  fill() {
      this.list = [];

      for(let i=0; i<localStorage.length; i++) {
          let key = localStorage.key(i);

          let obj = JSON.parse(localStorage.getItem(key));

          this.list.push({
              key: key,
              inputText: obj.inputText,
              outputText: obj.outputText,
              targetLang: obj.targetLang
          });

          console.log(this.list);
      }
  }

  // удаление всех текстов
  clear() {
      localStorage.clear();
      this.fill();
  }

  // удаление текста по ID
  remove(id) {
      localStorage.removeItem(id);
      this.fill();
  }
}
