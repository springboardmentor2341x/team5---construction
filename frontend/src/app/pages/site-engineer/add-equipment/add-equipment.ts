// import { Comment } from "@angular/compiler";
// import { Component } from "@angular/core";
// import { RouterLink, RouterOutlet } from "@angular/router";

// @Component({
//     selector:'app-add-equipment',
//     imports: [
//         // RouterLink,
//         // RouterOutlet
//     ],
//     templateUrl:'./add-equipment.html',
//     styleUrl:'./add-equipment.css'

// })
// export class AddEquipmentcomponent {

// }


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EquipmentService } from '../../../services/equipment.service';


@Component({
  selector: 'app-add-equipment',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './add-equipment.html',
  styleUrl: './add-equipment.css'
})
export class AddEquipmentcomponent {

  constructor(
    private equipmentService: EquipmentService,
    private router: Router) {}

  equipment = {
    id: '',
    name: '',
    category: '',
    project: '',
    quantity: 1,
    condition: 'Good',
    status: 'Available',
    purchaseDate: ''
  };

  saveEquipment(): void {

    //console.log(this.equipment);
    this.equipmentService.addEquipment(this.equipment);

    alert('Equipment Added Successfully');

    // Next step me isko Equipment Status page me bhejenge

    this.router.navigate(['/site-engineer/equipment-status']);

  }

  cancel(): void {

    this.router.navigate(['/site-engineer/equipment-status']);

  }

}


