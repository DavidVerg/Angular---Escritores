import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/escritores' },
  { path: 'escritores', component: ListaEscritoresComponent },
  { path: 'escritores/:escritorId', component: DetalleComponent, children:[
    { path: 'libros', component: ListaLibrosComponent }
  ] },
  { path: '**', redirectTo: '/escritores' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
