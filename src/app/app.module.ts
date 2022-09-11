import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { InicioComponent } from './components/inicio/inicio.component';

import { JwplayerComponent } from './components/jwplayer/jwplayer.component';

import { routing } from './app.routing';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ClapprComponent } from './components/clappr/clappr.component';
import { BitmovinComponent } from './components/bitmovin/bitmovin.component';
import { VideojsComponent } from './components/videojs/videojs.component';
import { FlowplayerComponent } from './components/flowplayer/flowplayer.component';
import { BridComponent } from './components/brid/brid.component';
import { FluidComponent } from './components/fluid/fluid.component';
import { DashjsComponent } from './components/dashjs/dashjs.component';
import { NativoComponent } from './components/nativo/nativo.component';
//import { RadiantComponent } from './components/radiant/radiant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    NavegacionComponent,
    InicioComponent,
    JwplayerComponent,
    ErrorComponent,
    ClapprComponent,
    BitmovinComponent,
    VideojsComponent,
    FlowplayerComponent,
    BridComponent,
    FluidComponent,
    DashjsComponent,
    NativoComponent,
    //   RadiantComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
