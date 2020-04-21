import {Component, OnInit} from '@angular/core';

import {Observable, of} from 'rxjs';

import {AvgColorsService} from './avg-service.service';
// import * as fromImages from '../../../response.json';

interface ColorInfo {
  id: number;
  imageVersionId: number;
  color: string;
  pct: number;
}

interface ImageInfo {
  id: number;
  imageId: number;
  version: string;
  processingTimeMillis: number;
  colors: ColorInfo[];
}

export interface Image {
  id: number;
  title: string;
  description: string;
  original: string;
  versions: ImageInfo[];
}

@Component({
  selector: 'app-average-color',
  templateUrl: './average-color.component.html',
  styleUrls: ['./average-color.component.less']
})
export class AverageColorComponent implements OnInit {

  images$: Observable<Image[]>;

  constructor(private avgService: AvgColorsService) {
  }

  ngOnInit(): void {
    this.images$ = this.avgService.getImages();
    // this.images$ = of(fromImages.default);
  }
}
