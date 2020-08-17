import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {createConsoleLogger} from "@angular-devkit/core/node";
import {Text} from "../list/list.component";


export interface Language {
    key: string;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

    url = "https://translation.googleapis.com/language/translate/v2?key=AIzaSyC_P6j4rudEjbVnG-pLPggZPkULDAyMHAo";
    inputText = 'Text for translate';
    outputText = '';
    targetLang = 'ru';
    languages: Language[] = [];


    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.getLanguages();
    }

    inputHandler(value) {
      this.inputText = value;
    }

    selectTargetLang(value) {
        this.targetLang = value;
    }

    // перевод текста
    translate() {
        this.outputText = this.inputText;

        let body = {
              q: this.inputText,
              target: this.targetLang,
        };

        this.http.post(this.url, body).toPromise().then(result => {
          this.outputText = result['data']['translations'][0]['translatedText'];
        });
    }

    // получить все доступные для перевода языки
    getLanguages() {
        let url = 'https://translation.googleapis.com/language/translate/v2/languages?key=AIzaSyC_P6j4rudEjbVnG-pLPggZPkULDAyMHAo';

        this.http.post(url, {}).toPromise().then(result => {

            for(let i = 0; i < result['data']['languages'].length; i++) {

                this.languages.push({
                    key: result['data']['languages'][i]['language']
                });
            }
        });
    }

    // сохранение перевода в localStorage
    save() {
      let date = new Date();
      let _key = date.getTime().toString();

      let obj = {
          inputText: this.inputText,
          outputText: this.outputText,
          targetLang: this.targetLang
      };

      localStorage.setItem(_key, JSON.stringify(obj));
    }

}
