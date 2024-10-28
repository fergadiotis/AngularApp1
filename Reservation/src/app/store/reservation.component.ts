import { Component } from "@angular/core";
import { ConservationArea, Reservation } from "../model/reservation.model";
import { ReservationRepository } from "../model/reservation.repository";

@Component({
    selector: "conservation",
    templateUrl: "reservation.component.html",
    styleUrls: ["reservation.component.css"]
})
export class ReservationComponent {
    public selectedArea: ConservationArea | undefined;
    public selectedDate: string = new Date().toISOString().split('T')[0];
    public availableSlots: Reservation[] = [];

    constructor(private repository: ReservationRepository) {
        this.selectedDate = new Date().toISOString().split('T')[0];
    }

    get areas(): ConservationArea[] {
        return this.repository.getAreas();
    }

    selectArea(area: ConservationArea) {
        this.selectedArea = area;
        this.updateAvailableSlots();
    }

    updateDate(event: Event) {
        this.selectedDate = (event.target as HTMLInputElement).value;
        this.updateAvailableSlots();
    }

    private updateAvailableSlots() {
        if (this.selectedArea && this.selectedDate) {
            this.availableSlots = this.repository
                .getAvailableSlots(this.selectedArea.id, this.selectedDate);
        }
    }

    reserveSlot(slot: Reservation) {
        if (slot.currentBookings < (slot.maxVisitors ?? 0)) {
            this.repository.saveReservation({
                ...slot,
                currentBookings: (slot.currentBookings ?? 0) + 1
            });
            this.updateAvailableSlots();
        }
    }

    isSlotAvailable(slot: Reservation): boolean {
        return (slot.currentBookings ?? 0) < (slot.maxVisitors ?? 0);
    }
}