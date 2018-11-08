import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) {}
    private apiUrl = 'https://equipment-app.now.sh/api/MobilEquipments';
    getEquipment() {
      return this.http.get(this.apiUrl);
    }

}

