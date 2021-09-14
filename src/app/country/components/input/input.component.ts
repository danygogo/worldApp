import { Component, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';




@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
 

  @Output() onEnter: EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()

  //this debouncer is an observable that was created manually 
  debouncer: Subject<string> = new Subject();

  term: string = " "; 

  
  ngOnInit(): void{
    this.debouncer
    .pipe(debounceTime(500))
    .subscribe(val =>{
      this.onDebounce.emit( val )
    });
  }

  search(){
    this.onEnter.emit(this.term)
  }

  keyboardActive(){
    this.debouncer.next(this.term)
  }

}
