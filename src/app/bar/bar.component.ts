import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  @ViewChild('container') container;

  _percentage: number;
  _updatable: boolean = false;

  _updating: boolean = false;



  constructor() { }

  @Input('percentage')
  set percentage(value: number) {
    this._percentage = Math.max(0, Math.min(100, value));
  }

  @Input('updatable')
  set updatable(value: boolean) {
    this._updatable = value;
  }

  mousedown(){
    this._updating = true;
  }

  mouseup(){
    this._updating = false;
  }

  @HostListener('mousemove', ['$event'])
  update(event:any){
    if(!this._updatable)
      return;
    if(!this._updating)
      return
    if(this.container.nativeElement.offsetWidth!=0){
      this.percentage = 
        Math.floor(event.clientX/this.container.nativeElement.offsetWidth*100);
    }
  }
  
  ngOnInit() {
  }

}
