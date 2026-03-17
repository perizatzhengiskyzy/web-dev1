import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotosComponent } from './album-photos';

describe('AlbumPhotos', () => {
  let component: AlbumPhotosComponent;
  let fixture: ComponentFixture<AlbumPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumPhotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumPhotosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});