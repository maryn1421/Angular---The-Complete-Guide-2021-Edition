import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
 // newServerContent = '';

  @ViewChild("newServerContent") serverContent : ElementRef
    constructor() { }

    ngOnInit(): void {
    }


    onAddServer(nameInput : HTMLInputElement) {
        this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContent.nativeElement.value})
    }

    onAddBlueprint(nameInput : HTMLInputElement) {
      this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverContent.nativeElement.value})

    }


}
