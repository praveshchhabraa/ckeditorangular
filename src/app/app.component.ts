import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { CKEditor5 } from '../ckeditor/ckeditor';
import { ChangeEvent, FocusEvent, BlurEvent } from '../ckeditor/ckeditor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public Editor = ClassicEditorBuild;
  public isDisabled = false;
  public editorData =
    `<p>Getting used to an entirely different culture can be challenging.
While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person.
You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>`;
  public componentEvents: string[] = [];

  /**  An instance of https://angular.io/api/core/NgZone to allow the interaction with the editor
  withing the Angular event loop.
  */
  private ngZone: NgZone;

  constructor(ngZone: NgZone) {
    // To access ckeditor outside of angular using ngZone
    this.ngZone = ngZone;
    window['angularLoaderComponentRef'] = {
      component: this,
      zone: this.ngZone
    };
  }

  // show and hide loader as per parameter passing from ckeditor build
  showLoader(isLoaderVisibile: boolean): void {
    alert();
  }


  toggleDisableEditors() {
    this.isDisabled = !this.isDisabled;
  }

  onReady(editor: CKEditor5.Editor): void {
    this.componentEvents.push('The editor is ready.');
  }

  onChange(event: ChangeEvent): void {
    this.componentEvents.push('Editor model changed.');
  }

  onFocus(event: FocusEvent): void {
    this.componentEvents.push('Focused the editing view.');
  }

  onBlur(event: BlurEvent): void {
    this.componentEvents.push('Blurred the editing view.');
  }
}
