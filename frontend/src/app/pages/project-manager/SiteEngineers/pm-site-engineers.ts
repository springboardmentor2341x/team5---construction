import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({

  selector: 'app-site-engineers',

  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],

  templateUrl: './pm-site-engineers.html',

  styleUrls: ['./pm-site-engineers.css']

})

export class SiteEngineersComponent {

  engineers = [

    {
      name: 'Rahul Kumar',
      id: 'SE001',
      contact: '9876543210',
      area: 'Foundation Area',
      project: 'Metro Project',
      status: 'Active'
    },

    {
      name: 'Priya Sharma',
      id: 'SE002',
      contact: '9876543211',
      area: 'Structure',
      project: 'Building Project',
      status: 'On Leave'
    },

    {
      name: 'Arun Kumar',
      id: 'SE003',
      contact: '9876543212',
      area: 'Electrical Work',
      project: 'Commercial Complex',
      status: 'Active'
    }

  ];

  totalEngineers = 25;

  assignedEngineers = 18;

  availableEngineers = 5;

  leaveEngineers = 2;

  searchText = '';

  filteredEngineers() {

    return this.engineers.filter(engineer =>

      engineer.name
        .toLowerCase()
        .includes(this.searchText.toLowerCase())

    );

  }

  assignEngineer() {

    alert('Engineer Assigned Successfully');

  }

  removeEngineer(name: string) {

    alert(name + ' removed successfully');

  }

}

