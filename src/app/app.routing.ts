import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InicioComponent } from "./components/inicio/inicio.component";
import { BitmovinComponent } from "./components/bitmovin/bitmovin.component";
import { JwplayerComponent } from "./components/jwplayer/jwplayer.component";
import { ClapprComponent } from "./components/clappr/clappr.component";
import { VideojsComponent } from "./components/videojs/videojs.component";
import { FlowplayerComponent } from "./components/flowplayer/flowplayer.component";
import { NativoComponent } from "./components/nativo/nativo.component";
import { BridComponent } from "./components/brid/brid.component";
import { DashjsComponent } from "./components/dashjs/dashjs.component";
import { FluidComponent } from "./components/fluid/fluid.component";
import { ErrorComponent } from "./components/error/error.component";

const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'jwplayer', component: JwplayerComponent },
  { path: 'clappr', component: ClapprComponent },
  { path: 'videojs', component: VideojsComponent },
  { path: 'bitmovin', component: BitmovinComponent },
  { path: 'flowplayer', component: FlowplayerComponent },
  { path: 'nativo', component: NativoComponent },
  { path: 'fluid', component: FluidComponent },
  { path: 'dashjs', component: DashjsComponent },
  { path: 'brid', component: BridComponent },
  { path: '**', component: ErrorComponent }

]

export const routing: ModuleWithProviders<Object> = RouterModule.forRoot(appRoutes);
