import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({

  selector: 'app-contractors',

  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],

  templateUrl: './pm-contractors.html',

  styleUrls: ['./pm-contractors.css']

})

export class ContractorsComponent {

  totalContractors = 42;

  assignedContractors = 35;

  activeContractors = 30;

  availableContractors = 7;

  searchText = '';

  contractors = [

    {

      name: 'ABC Constructions',

      company: 'ABC Builders Pvt Ltd',

      specialization: 'Civil',

      contact: '9876543210',

      project: 'Metro Rail Project',

      status: 'Active'

    },

    {

      name: 'Bright Electricals',

      company: 'Bright Engineering',

      specialization: 'Electrical',

      contact: '9876543211',

      project: 'Commercial Complex',

      status: 'Assigned'

    },

    {

      name: 'Perfect Plumbing',

      company: 'Perfect Services',

      specialization: 'Plumbing',

      contact: '9876543212',

      project: 'Residential Tower',

      status: 'Active'

    },

    {

      name: 'Dream Interiors',

      company: 'Dream Designers',

      specialization: 'Interior',

      contact: '9876543213',

      project: 'Corporate Office',

      status: 'Available'

    },

    {

      name: 'Royal Painters',

      company: 'Royal Paint Works',

      specialization: 'Painting',

      contact: '9876543214',

      project: 'Shopping Mall',

      status: 'Assigned'

    },

    {

      name: 'Cool Air HVAC',

      company: 'Cool Air Systems',

      specialization: 'HVAC',

      contact: '9876543215',

      project: 'Hospital Project',

      status: 'Active'

    }

  ];

  filteredContractors() {

    return this.contractors.filter(contractor =>

      contractor.name
        .toLowerCase()
        .includes(this.searchText.toLowerCase())

    );

  }

  assignContractor() {

    alert('Contractor Assigned Successfully');

  }

  removeContractor(name: string) {

    alert(name + ' removed successfully');

  }

}
