import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [
    UserService // Add FormDataService to providers if it's not providedIn: 'root'
  ],
})
export class TableComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  editUser(user: any) {
    // Implement edit user functionality
    console.log('Edit user:', user);
  }

  deleteUser(user: any) {
    // Implement delete user functionality
    console.log('Delete user:', user);
  }

}
