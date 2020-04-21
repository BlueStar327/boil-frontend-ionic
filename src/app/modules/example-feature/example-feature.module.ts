import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

import { HomePage } from "./pages/home/home.page";
import { ExampleFeatureRoutingModule } from "./example-feature-routing.module";
import { PresentationComponent } from "./components/presentation/presentation.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    ExampleFeatureRoutingModule,
  ],
  declarations: [HomePage, PresentationComponent],
})
export class HomePageModule {}
