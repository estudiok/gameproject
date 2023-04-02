import { Component } from '@angular/core';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cities!: City[];
  selectedCity!: City;
  
  ngOnInit() {
    this.cities = [
      { name: 'Habilitado', code: 'enabled' },
      { name: 'Inhabilitado', code: 'disabled' },
    ];
  }

}
