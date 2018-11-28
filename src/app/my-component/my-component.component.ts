import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-my-component',
	templateUrl: './my-component.component.html',
	styleUrls: [ './my-component.component.scss' ],
})
export class MyComponentComponent implements OnInit {
	name = 'Harvin BJ';
	count = 0;
	imgSource = 'https://www.facevertizing.com/wp-content/uploads/2016/05/Nailed-It-Baby-Meme-06.jpg';
	disabled: false;

	constructor() {}

	ngOnInit() {}

	onKeyUp(event) {
		console.log(event.target.value);
	}
}
