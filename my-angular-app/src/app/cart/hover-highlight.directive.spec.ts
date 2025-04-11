import { HighlightDirective } from './hover-highlight.directive';
import { ElementRef } from '@angular/core';

describe('HoverHighlightDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div')); // ✅ Mock ElementRef
    const directive = new HighlightDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
