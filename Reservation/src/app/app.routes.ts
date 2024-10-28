import { Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { MyReservationsComponent } from './reservation/my-reservations.component';

export const routes: Routes = [
    {
        path: 'areas',
        component: ReservationComponent
    },
    {
        path: 'reservations',
        component: MyReservationsComponent
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module')
            .then(m => m.AdminModule),
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '/areas',
        pathMatch: 'full'
    }
];