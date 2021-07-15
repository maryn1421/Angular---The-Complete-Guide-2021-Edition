import { Component, Input, OnInit, SimpleChange, ViewEncapsulation, OnChanges, DoCheck, SimpleChanges, AfterContentInit, AfterContentChecked, OnDestroy, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content : string};

  @ContentChild("contentParagraph") paragraph : ElementRef


  constructor() {
    console.log("constructor called")
  }

  ngOnChanges(changes: SimpleChanges) {
   console.log("ngonChanges called")
   console.log(changes)
  }


  ngDoCheck() {
      console.log("ngDoCheck called")
  }


  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called")
  }

  ngAfterContentInit() {
    console.log("After content init called")
    console.log("textcontent of paragraph: +  " + this.paragraph.nativeElement.textcontent)

  }

  ngOnDestroy() {
    console.log("ngOnDestory called")
  }



  ngOnInit(): void {
    console.log("ngOnInit called")
  }

}
