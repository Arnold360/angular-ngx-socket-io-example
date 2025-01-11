import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketDataService {

   texto:string = "aaaa ";
  constructor(private socket: Socket) {}
   

  getData(): Observable<(number | string)> {
    this.socket.emit('subscribeToServer', 1000);

    return this.socket.fromEvent<(number | string)>('reading');
  }


 
}
