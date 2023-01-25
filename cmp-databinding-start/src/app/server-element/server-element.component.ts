import { 
  Component, 
  Input, 
  OnInit, 
  ViewEncapsulation,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges

} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
OnInit, 
OnChanges 
// DoCheck, 
// AfterContentInit, 
// AfterContentChecked, 
// AfterViewInit, 
// AfterViewChecked, 
// OnDestroy 
{
  @Input('srvElement') element: { type: string, name: string, content: string };
  //{} is an object, inside the object we have 3 properties with their types
  // @Input() element is a decorator, so we can use it as a property}
  @Input() name: string;

  constructor() {
    console.log('constructor called!'); //this is the first thing that is called
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!'); //this is called when the parent component is updated
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!'); //this is called when checking for changes
  }
  
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }
  
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
  }
  
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }


}
