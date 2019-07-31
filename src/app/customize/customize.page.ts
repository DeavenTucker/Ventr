import { Component, OnInit } from '@angular/core';

let customButton: string[];
customButton = ['skinToneButton', 'hairButton', 'eyeButton'];
let faceButtons: string[];
faceButtons = ['faceButton1', 'faceButton2', 'faceButton3', 'faceButton4', 'faceButton5'];
let hairButtons: string[];
hairButtons = ['hair1', 'hair2', 'hair3', 'hair4', 'hair5', 'hair6', 'hair7', 'hair8'];
let eyeButtons: string[];
eyeButtons = ['eyes1', 'eyes2', 'eyes3', 'eyes4', 'eyes5', 'eyes6', 'eyes7', 'eyes8'];
let skinTone1Face: string[];
skinTone1Face = ['face11', 'face12', 'face13', 'face14', 'face15', 'face16', 'face17', 'face18'];
let skinTone2Face: string[];
skinTone2Face = ['face21', 'face22', 'face23', 'face24', 'face25', 'face26', 'face27', 'face28'];
let skinTone3Face: string[];
skinTone3Face = ['face31', 'face32', 'face33', 'face34', 'face35', 'face36', 'face37', 'face38'];
let skinTone4Face: string[];
skinTone4Face = ['face41', 'face42', 'face43', 'face44', 'face45', 'face46', 'face47', 'face48'];
let skinTone5Face: string[];
skinTone5Face = ['face51', 'face52', 'face53', 'face54', 'face55', 'face56', 'face57', 'face58'];
let holder: number;
holder = -1;
let holderArr: string[];

@Component({
  selector: 'app-customize',
  templateUrl: './customize.page.html',
  styleUrls: ['./customize.page.scss'],
})
export class CustomizePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
