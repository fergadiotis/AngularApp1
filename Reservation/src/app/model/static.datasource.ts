import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { ConservationArea } from "./reservation.model";

@Injectable()
export class StaticDataSource {
    private areas: ConservationArea[] = [
        new ConservationArea(
            1,
            "Pine Valley Reserve",
            "Ancient pine forest with marked hiking trails and bird watching stations",
            "/assets/pine-valley.jpg",
            25.00,
            ["Hiking Trails", "Bird Watching", "Parking"]
        ),
        new ConservationArea(
            2,
            "Riverside Wetlands",
            "Protected wetland ecosystem with boardwalks and wildlife viewing platforms",
            "/assets/wetlands.jpg",
            30.00,
            ["Boardwalks", "Wildlife Viewing", "Educational Center"]
        ),
        new ConservationArea(
            3,
            "Mountain Ridge Park",
            "Elevated trails with panoramic views and rock climbing areas",
            "/assets/mountain.jpg",
            35.00,
            ["Rock Climbing", "Scenic Views", "Picnic Areas"]
        ),
        new ConservationArea(
            4,
            "Lake Echo Preserve",
            "Pristine lake environment with fishing spots and canoe rentals",
            "/assets/lake.jpg",
            40.00,
            ["Fishing", "Canoeing", "Swimming"]
        )
    ];

    private timeSlots = [
        "09:00-12:00",
        "12:00-15:00",
        "15:00-18:00"
    ];

    getAreas(): Observable<ConservationArea[]> {
        return from([this.areas]);
    }

    getTimeSlots(): string[] {
        return this.timeSlots;
    }
}