import { EventData, Page } from '@nativescript/core';
import { requestPermissions } from '@nativescript/camera';

import { HelloWorldModel } from './main-view-model';

requestPermissions().then(
  function success() {
    // permission request accepted or already granted
    // ... call camera.takePicture here ...
  },
  function failure() {
    // permission request rejected
    // ... tell the user ...
  }
);
export function navigatingTo(args: EventData) {
  const page = <Page>args.object;

  page.bindingContext = new HelloWorldModel();
}
