import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[esClipboard]'
})
export class ClipboardDirective {
  @Input('esClipboard') clipboardText: string;

  constructor() {
    console.log('Clipboard created');
  }

  private clip(): void {
    console.log(this.clipboardText);
  }

  @HostListener('click') onMouseClick() {
    this.clip();

    const event = (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', this.clipboardText);
      e.preventDefault();
      document.removeEventListener('copy', event);
    };

    document.addEventListener('copy', event);
    document.execCommand('copy');
  }
}
