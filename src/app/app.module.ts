import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { PuestosComponent } from './puestos/puestos.component';
import { BodegasComponent } from './bodegas/bodegas.component';
import { RequisicionMaterialesComponent } from './requisicion-materiales/requisicion-materiales.component';
import { SolicitudCompraComponent } from './solicitud-compra/solicitud-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmpleadosComponent,
    DepartamentosComponent,
    PuestosComponent,
    BodegasComponent,
    RequisicionMaterialesComponent,
    SolicitudCompraComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
