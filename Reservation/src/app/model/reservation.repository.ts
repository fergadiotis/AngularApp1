import { Injectable } from "@angular/core";
import { ConservationArea, Reservation } from "./reservation.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ReservationRepository {
    private areas: ConservationArea[] = [];
    private reservations: Reservation[] = [];
    private timeSlots: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getAreas().subscribe(data => {
            this.areas = data;
        });
        this.timeSlots = dataSource.getTimeSlots();
    }

    getAreas(): ConservationArea[] {
        return this.areas;
    }

    getArea(id: number): ConservationArea | undefined {
        return this.areas.find(a => a.id == id);
    }

    getTimeSlots(): string[] {
        return this.timeSlots;
    }

    getAvailableSlots(areaId: number, date: string): Reservation[] {
        // Create available slots for the given date and area
        return this.timeSlots.map(slot => {
            const existingBookings = this.reservations.filter(r =>
                r.areaId === areaId &&
                r.date === date &&
                r.timeSlot === slot
            ).length;

            const area = this.getArea(areaId);
            return new Reservation(
                undefined,
                areaId,
                area?.name,
                slot,
                date,
                area?.price,
                3, // Max visitors per slot
                existingBookings
            );
        });
    }

    saveReservation(reservation: Reservation): void {
        if (reservation.id == null) {
            reservation.id = this.generateId();
        }
        this.reservations.push(reservation);
    }

    private generateId(): number {
        return Math.max(0, ...this.reservations.map(r => r.id ?? 0)) + 1;
    }
}