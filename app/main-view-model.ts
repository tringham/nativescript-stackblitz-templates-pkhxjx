import { Observable, Image } from '@nativescript/core';

import * as camera  from '@nativescript/camera';
//import * as firebase from 'firebase';
import * as firebase  from "nativescript-plugin-firebase";

export class HelloWorldModel extends Observable {
  private _counter: number;
  private _message: string;



  constructor() {
    super();

    // Initialize default values.
    this._counter = 49;
    this.updateMessage();
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value;
      this.notifyPropertyChange('message', value);
    }
  }

  onTap() {
    this._counter--;
    this.updateMessage();
  }

  async private updateMessage() {
    if (this._counter <= 0) {
      this.message =
        'Hoorraaay! You unlocked the NativeScript clicker achievement!';
    } else {
      this.message = `${this._counter} taps left`;
    }
    let imageAsset = await camera.takePicture()

    this.message = "Result is an image asset ";
    var image = new Image();
    image.src = imageAsset;
    let result = await firebase.mlkit.textrecognition.recognizeTextOnDevice({image: image })
    this.message = result.text ? result.text : "");
  
    // log the message to the console
      console.log(this.message);
  
}