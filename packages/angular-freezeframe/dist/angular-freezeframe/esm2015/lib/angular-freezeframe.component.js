/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import Freezeframe from 'freezeframe';
import * as i0 from "@angular/core";
const _c0 = ["freezeRef"];
const _c1 = ["slotRef"];
function AngularFreezeframeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "img", 3, 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("src", ctx_r1.src, i0.ɵɵsanitizeUrl);
} }
const _c2 = ["*"];
export class AngularFreezeframeComponent {
    constructor() {
        this.isPlaying = false;
        this.startEvent = new EventEmitter();
        this.stopEvent = new EventEmitter();
        this.toggleEvent = new EventEmitter();
    }
    ngAfterViewInit() {
        this.init();
    }
    ngOnDestroy() {
        this.destroy();
    }
    init() {
        const target = this.slotIsEmpty && this.src
            ? this.freezeRef.nativeElement
            : this.slotRef.nativeElement;
        this.$freezeframe = new Freezeframe(target, this.options);
        this.initEventListeners();
    }
    initEventListeners() {
        this.$freezeframe.on('toggle', (items, isPlaying) => {
            this.isPlaying = isPlaying;
            if (isPlaying) {
                this.startEvent.emit({ items, isPlaying });
            }
            else {
                this.stopEvent.emit({ items, isPlaying });
            }
            this.toggleEvent.emit({ items, isPlaying });
        });
    }
    get slotIsEmpty() {
        var _a, _b, _c;
        return !((_c = (_b = (_a = this.slotRef) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.innerHTML) === null || _c === void 0 ? void 0 : _c.trim());
    }
    start() {
        var _a;
        (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.start();
    }
    stop() {
        var _a;
        (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.stop();
    }
    toggle() {
        var _a;
        (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.toggle();
    }
    destroy() {
        var _a;
        (_a = this.$freezeframe) === null || _a === void 0 ? void 0 : _a.destroy();
    }
}
AngularFreezeframeComponent.ɵfac = function AngularFreezeframeComponent_Factory(t) { return new (t || AngularFreezeframeComponent)(); };
AngularFreezeframeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AngularFreezeframeComponent, selectors: [["angular-freezeframe"]], viewQuery: function AngularFreezeframeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
        i0.ɵɵviewQuery(_c1, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.freezeRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotRef = _t.first);
    } }, inputs: { src: "src", options: "options" }, outputs: { startEvent: "startEvent", stopEvent: "stopEvent", toggleEvent: "toggleEvent" }, ngContentSelectors: _c2, decls: 5, vars: 1, consts: [[1, "angular-freezeframe"], ["slotRef", ""], [4, "ngIf"], [3, "src"], ["freezeRef", ""]], template: function AngularFreezeframeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", null, 1);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, AngularFreezeframeComponent_div_4_Template, 3, 1, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", !_r0.innerHTML.trim());
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularFreezeframeComponent, [{
        type: Component,
        args: [{
                selector: 'angular-freezeframe',
                template: `
    <div class="angular-freezeframe">
      <div #slotRef><ng-content></ng-content></div>
      <div *ngIf="!slotRef.innerHTML.trim()">
        <img #freezeRef src="{{src}}" />
      </div>
    </div>
  `
            }]
    }], null, { src: [{
            type: Input
        }], options: [{
            type: Input
        }], startEvent: [{
            type: Output
        }], stopEvent: [{
            type: Output
        }], toggleEvent: [{
            type: Output
        }], freezeRef: [{
            type: ViewChild,
            args: ['freezeRef']
        }], slotRef: [{
            type: ViewChild,
            args: ['slotRef']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1mcmVlemVmcmFtZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWZyZWV6ZWZyYW1lL3NyYy9saWIvYW5ndWxhci1mcmVlemVmcmFtZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLFdBQVcsTUFBTSxhQUFhLENBQUE7Ozs7O0lBYS9CLDJCQUF1QztJQUNyQyw0QkFBZ0M7SUFDbEMsaUJBQU07OztJQURZLGVBQWE7SUFBYiw2REFBYTs7O0FBS3JDLE1BQU0sT0FBTywyQkFBMkI7SUFYeEM7UUFhRSxjQUFTLEdBQUcsS0FBSyxDQUFBO1FBSVAsZUFBVSxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO1FBQ3pELGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUN4RCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO0tBb0RyRTtJQS9DQyxlQUFlO1FBQ2IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUVPLElBQUk7UUFDVixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxHQUFHO1lBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWE7WUFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFBO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN6RCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUMzQixDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQWUsRUFBRSxTQUFrQixFQUFFLEVBQUU7WUFDckUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7WUFDMUIsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTthQUMzQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO2FBQzFDO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTtRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFZLFdBQVc7O1FBQ3JCLE9BQU8sb0JBQUMsSUFBSSxDQUFDLE9BQU8sMENBQUUsYUFBYSwwQ0FBRSxTQUFTLDBDQUFFLElBQUksR0FBRSxDQUFBO0lBQ3hELENBQUM7SUFFRCxLQUFLOztRQUNILE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsS0FBSyxHQUFFO0lBQzVCLENBQUM7SUFFRCxJQUFJOztRQUNGLE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsSUFBSSxHQUFFO0lBQzNCLENBQUM7SUFFRCxNQUFNOztRQUNKLE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsTUFBTSxHQUFFO0lBQzdCLENBQUM7SUFFRCxPQUFPOztRQUNMLE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsT0FBTyxHQUFFO0lBQzlCLENBQUM7O3NHQTNEVSwyQkFBMkI7Z0VBQTNCLDJCQUEyQjs7Ozs7Ozs7O1FBUnBDLDhCQUFpQztRQUMvQixvQ0FBYztRQUFBLGtCQUF5QjtRQUFBLGlCQUFNO1FBQzdDLDRFQUVNO1FBQ1IsaUJBQU07OztRQUhFLGVBQStCO1FBQS9CLDRDQUErQjs7dUZBTTlCLDJCQUEyQjtjQVh2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7YUFDRjtnQkFLVSxHQUFHO2tCQUFYLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDSSxVQUFVO2tCQUFuQixNQUFNO1lBQ0csU0FBUztrQkFBbEIsTUFBTTtZQUNHLFdBQVc7a0JBQXBCLE1BQU07WUFFaUIsU0FBUztrQkFBaEMsU0FBUzttQkFBQyxXQUFXO1lBQ0EsT0FBTztrQkFBNUIsU0FBUzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvciAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgRnJlZXplZnJhbWUgZnJvbSAnZnJlZXplZnJhbWUnXG5pbXBvcnQgeyBGcmVlemVmcmFtZU9wdGlvbnMsIEZyZWV6ZSB9IGZyb20gJ2ZyZWV6ZWZyYW1lL3R5cGVzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEFuZ3VsYXJGcmVlemVmcmFtZUV2ZW50IHtcbiAgaXRlbXM6IEZyZWV6ZVtdLFxuICBpc1BsYXlpbmc6IGJvb2xlYW5cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW5ndWxhci1mcmVlemVmcmFtZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFuZ3VsYXItZnJlZXplZnJhbWVcIj5cbiAgICAgIDxkaXYgI3Nsb3RSZWY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cIiFzbG90UmVmLmlubmVySFRNTC50cmltKClcIj5cbiAgICAgICAgPGltZyAjZnJlZXplUmVmIHNyYz1cInt7c3JjfX1cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckZyZWV6ZWZyYW1lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgJGZyZWV6ZWZyYW1lITogRnJlZXplZnJhbWVcbiAgaXNQbGF5aW5nID0gZmFsc2VcblxuICBASW5wdXQoKSBzcmM/OiBzdHJpbmdcbiAgQElucHV0KCkgb3B0aW9ucz86IEZyZWV6ZWZyYW1lT3B0aW9uc1xuICBAT3V0cHV0KCkgc3RhcnRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5ndWxhckZyZWV6ZWZyYW1lRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBzdG9wRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEFuZ3VsYXJGcmVlemVmcmFtZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgdG9nZ2xlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEFuZ3VsYXJGcmVlemVmcmFtZUV2ZW50PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZyZWV6ZVJlZicpIGZyZWV6ZVJlZiE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3Nsb3RSZWYnKSBzbG90UmVmITogRWxlbWVudFJlZjtcblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSgpXG4gIH1cblxuICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5zbG90SXNFbXB0eSAmJiB0aGlzLnNyY1xuICAgICAgPyB0aGlzLmZyZWV6ZVJlZi5uYXRpdmVFbGVtZW50XG4gICAgICA6IHRoaXMuc2xvdFJlZi5uYXRpdmVFbGVtZW50XG4gICAgdGhpcy4kZnJlZXplZnJhbWUgPSBuZXcgRnJlZXplZnJhbWUodGFyZ2V0LCB0aGlzLm9wdGlvbnMpXG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0RXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy4kZnJlZXplZnJhbWUub24oJ3RvZ2dsZScsIChpdGVtczogRnJlZXplW10sIGlzUGxheWluZzogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5pc1BsYXlpbmcgPSBpc1BsYXlpbmdcbiAgICAgIGlmIChpc1BsYXlpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydEV2ZW50LmVtaXQoeyBpdGVtcywgaXNQbGF5aW5nIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0b3BFdmVudC5lbWl0KHsgaXRlbXMsIGlzUGxheWluZyB9KVxuICAgICAgfVxuICAgICAgdGhpcy50b2dnbGVFdmVudC5lbWl0KHsgaXRlbXMsIGlzUGxheWluZyB9KVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgc2xvdElzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnNsb3RSZWY/Lm5hdGl2ZUVsZW1lbnQ/LmlubmVySFRNTD8udHJpbSgpXG4gIH1cblxuICBzdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLiRmcmVlemVmcmFtZT8uc3RhcnQoKVxuICB9XG5cbiAgc3RvcCgpOiB2b2lkIHtcbiAgICB0aGlzLiRmcmVlemVmcmFtZT8uc3RvcCgpXG4gIH1cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy4kZnJlZXplZnJhbWU/LnRvZ2dsZSgpXG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuJGZyZWV6ZWZyYW1lPy5kZXN0cm95KClcbiAgfVxufVxuIl19