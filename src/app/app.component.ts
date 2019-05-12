import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TweenMax, Elastic, Bounce } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    //https://greensock.com/get-started-js
    //npm install --save gsap
    //npm install --save gsap @types/gsap﻿

    @ViewChild("test") test: ElementRef;

    constructor() { }

    ngOnInit() {
        this.testfunc();
    }

    testfunc() {
        //TweenMax.to(this.test.nativeElement, 6, {
        //    left: 600,
        //    backgroundColor: "green",
        //    padding: 20,
        //    borderColor: "blue",
        //    borderRadius: 20
        //});

        //TweenMax.to(this.test.nativeElement, 6, {
        //    x: 600, ease: Elastic.easeOut
        //});

        //TweenMax.from(this.test.nativeElement, 6, {
        //    x: 600, ease: Elastic.easeOut
        //});

        TweenMax.from(".logo", 0.5, { opacity: 0, scale: 0, ease: Bounce.easeOut });
        TweenMax.staggerFrom(".box", 0.5, { opacity: 0, y: 200, rotation: 360, scale: 2, delay: 0.5 }, 0.2);
        TweenMax.to(".logo, .box", 0.5, { opacity: 0, delay: 2, onComplete: this.complete });


    }

    complete() {
        alert("all done");
    }
}
