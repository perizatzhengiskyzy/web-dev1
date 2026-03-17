import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html'
})
export class AlbumDetailComponent {

  album!: Album;
  editedTitle = '';
  loading: boolean = false;
  error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.loadAlbum();
  }

  loadAlbum() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) return;

    this.loading = true;
    this.error = false;

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  saveTitle() {
    const updatedAlbum = { ...this.album, title: this.editedTitle };

    this.albumService.updateAlbum(updatedAlbum).subscribe(() => {
      this.album.title = this.editedTitle;
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}