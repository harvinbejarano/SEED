import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-animal',
	templateUrl: './animal.component.html',
	styleUrls: [ './animal.component.scss' ],
})
export class AnimalComponent implements OnInit {
	imgSource = '';
	constructor() {}
	ngOnInit() {}

	onKeyUp(event) {
		let value: string = event.target.value;
		switch (value.toLowerCase()) {
			case 'cat':
				this.imgSource =
					'https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg';
				break;
			case 'dog':
				this.imgSource =
					'https://vetstreet.brightspotcdn.com/dims4/default/5b3ffe7/2147483647/thumbnail/180x180/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F8e%2F4e3910c36111e0bfca0050568d6ceb%2Ffile%2Fhub-dogs-puppy.jpg';
				break;
			default:
				this.imgSource = '';
		}
	}
}
