import { Directive, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[esClip]'
})
export class ClipDirective {
    @Input('esClip') clipboardText: string;

    constructor() {
        console.log('Clipboard created');
    }

    private clip(): void {
        console.log(this.clipboardText);
    }

    @HostListener('click') onMouseClick() {
        console.log('CLICK!');
        this.clip();
    }
}
