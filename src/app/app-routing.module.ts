import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { SeeCountryComponent } from './country/pages/see-country/see-country.component';

const routes: Routes = [
    {
        path: "",//------>this is the root 
        component: ByCountryComponent,
        pathMatch: "full" 
    },
    {
        path: "region",
        component: ByRegionComponent
    },
    {
        path: "capital",
        component: ByCapitalComponent
    },
    {
        path: "country/:id", //This needs to be fixed later
        component: SeeCountryComponent
    },
    {
        path: "**", 
        redirectTo: "" //If I want a personalized page I can creat it like this:   component: 404Component, I will do it later
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}