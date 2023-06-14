import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { PuestosComponent } from './puestos/puestos.component';
import { BodegasComponent } from './bodegas/bodegas.component';
import { RequisicionMaterialesComponent } from './requisicion-materiales/requisicion-materiales.component';
import { SolicitudCompraComponent } from './solicitud-compra/solicitud-compra.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'departamentos', component: DepartamentosComponent },
  { path: 'puestos', component: PuestosComponent },
  { path: 'bodegas', component: BodegasComponent },
  { path: 'requisicion-materiales', component: RequisicionMaterialesComponent },
  { path: 'solicitud-compra', component: SolicitudCompraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }