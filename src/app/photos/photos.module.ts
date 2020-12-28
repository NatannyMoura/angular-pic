import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [
        PhotoModule,
        PhotoListModule,
        PhotoFormModule,
        HttpClientModule,
        CommonModule
    ],
})
export class PhotosModule {}