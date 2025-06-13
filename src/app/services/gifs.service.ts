import {Injectable} from '@angular/core';
import {httpResource} from '@angular/common/http';
import {environment} from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class GifsService {


  gifResource = httpResource<{
    data: any[]
  }>(`${environment.apiRandomGifUrl}search?api_key=${environment.apiKey}&q=naruto&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);


}
