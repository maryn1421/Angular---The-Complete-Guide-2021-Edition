import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Observable, Observer, Subscription } from 'rxjs'
import {map, filter} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSubscription : Subscription;

  constructor() { }

  ngOnInit() {
    /*  this.firstSubscription =  interval(1000).subscribe(count => {
        console.log(count)
      }) */

      const customIntervalObservable = new Observable((observer : Observer<any>) => {
             let count = 0;
            setInterval(() => {
              observer.next(count)
              if (count === 2) {
                observer.complete()
              }
              if (count > 3) {
                observer.error(new Error("Count is greater 3!"))
              }
              count++
            }, 1000)
      })




      this.firstSubscription = customIntervalObservable.pipe(filter(data => {
        return data > 0;
      }),map(data  => {
        return 'Round: ' + (data + 1)
      })).subscribe     (data => {
        console.log(data)
      }, error => {
        console.log(error)
      }, () => {
        console.log('Completed')
      })
  }

  ngOnDestroy() {
    this.firstSubscription.unsubscribe()
  }

}
