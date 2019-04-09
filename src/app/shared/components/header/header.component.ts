import {
  OnInit,
  ViewChild,
  Component,
  ElementRef,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('appTitle') appTitle: ElementRef;

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit: ' + this.appTitle.nativeElement.innerHTML);
  }

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerHTML = 'Angular2+ Shop';
  }

  ngAfterViewChecked() {
    console.log('After viewChecked: ' + this.appTitle.nativeElement.innerHTML);
  }
}
