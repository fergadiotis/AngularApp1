export class Reservation {
    constructor(
        public id?: number,
        public areaId?: number,
        public areaName?: string,
        public timeSlot?: string,
        public date?: string,
        public price?: number,
        public maxVisitors?: number,
        public currentBookings?: number
    ) { }
}

export class ConservationArea {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public features: string[]
    ) { }
}