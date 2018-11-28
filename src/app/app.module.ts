import { AnimalComponent } from './animal/animal.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [
		AppComponent,
		MyComponentComponent,
		AnimalComponent,
		DashboardComponent,
		CardComponent,
	],
	imports: [ BrowserModule ],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
