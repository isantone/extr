import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[esClipboard]'
})
export class ClipboardDirective {
  @Input('esClipboard') textToCopy: string;

  constructor() {}

  private copyToClipboard(): void {
    const event = (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', this.textToCopy);
      e.preventDefault();
      document.removeEventListener('copy', event);
    };

    document.addEventListener('copy', event);
    document.execCommand('copy');
  }

  @HostListener('click') onMouseClick(): void {
    this.copyToClipboard();
  }
}

