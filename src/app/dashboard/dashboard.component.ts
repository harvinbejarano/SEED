import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.scss' ],
})
export class DashboardComponent implements OnInit {
	constructor() {}
	url;
	imageUrls = [
		'https://media2.giphy.com/media/13fjcmvKo45MBO/200.webp?cid=3640f6095bfdd8cf444e364f3270ccff',
		'https://media2.giphy.com/media/Um7TeqbaS33Ww/200w.webp?cid=3640f6095bfddfbe33334c424d2dc8c8',
		'https://media1.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.webp?cid=3640f6095bfde03e503035382e3262b2',
	];
	ngOnInit() {}

	zoomImage(imageUrl) {
		this.url = imageUrl;
	}
}
