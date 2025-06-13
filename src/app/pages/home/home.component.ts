import {Component, inject} from '@angular/core';
import {GifsService} from '../../services/gifs.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  gifService = inject(GifsService)
  gifs = this.gifService.gifResource
}
