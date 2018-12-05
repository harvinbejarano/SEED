import { AnimalComponent } from './animal/animal.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'Dashboard', component: DashboardComponent },
	{ path: 'Card', component: CardComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		MyComponentComponent,
		AnimalComponent,
		DashboardComponent,
		CardComponent,
	],
	imports: [ BrowserModule, RouterModule.forRoot(routes) ],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
