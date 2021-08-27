import { Component } from '@angular/core';

/**
 * @title Basic slider
 */
@Component({
  selector: 'slider-overview-example',
  templateUrl: 'slider-overview-example.html',
  styleUrls: ['slider-overview-example.css']
})
export class SliderOverviewExample {
  isVisible = true;
  minValue = 0;
  maxValue = 100;
  stepValue = 5;
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
