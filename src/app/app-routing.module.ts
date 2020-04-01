import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MahasiswaComponent } from './pages/mahasiswa/mahasiswa.component';
import { MahasiswaComponent } from './pages/mahasiswa/mahasiswa.component';
import { Pratikum3Component } from './pages/pratikum3/pratikum3.component';

const routes: Routes = [
{
	path: 'Mahasiswa',
	component:MahasiswaComponent
},
{
	path: 'Pratikum3',
	component:Pratikum3Component
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
