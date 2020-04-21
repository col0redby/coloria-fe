import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {AvgColorsService} from './avg-service.service';

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
  }

  getUrl(path: string) {
    return 'url(file://' + path + ')';
  }
}
