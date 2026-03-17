import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlbumService } from '../services/album';
import { Photo } from '../models/photo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  templateUrl: './album-photos.html',
  imports: [CommonModule]
})
export class AlbumPhotosComponent implements OnInit {

  photos$!: Observable<Photo[]>;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.photos$ = this.albumService.getAlbumPhotos(id);
  }
}