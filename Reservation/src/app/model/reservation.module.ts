import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReservationComponent } from "./reservation.component";
import { ModelModule } from "../model/model.module";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [ReservationComponent],
    exports: [ReservationComponent]
})
export class ReservationModule { }