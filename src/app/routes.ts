import { Routes } from "@angular/router";
import { ConvertorComponent } from "./convertor/convertor.component";
import { WeatherComponent } from "./weather/weather.component";

export const allAppRoutes: Routes = [
    {path: 'weather', component: WeatherComponent},
    {path: 'convertor', component:ConvertorComponent}
]