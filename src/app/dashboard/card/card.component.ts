import {
	Component,
	Input,
	OnInit,
	Output,
	EventEmitter,
} from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: [ './card.component.scss' ],
})
export class CardComponent implements OnInit {
	@Input() image;
	@Output() selectImage = new EventEmitter<string>();
	constructor() {}

	ngOnInit() {}

	onImageClick() {
		this.selectImage.emit(this.image);
	}
}
