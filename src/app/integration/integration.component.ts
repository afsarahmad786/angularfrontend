import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-integration',
  standalone: true,
  imports: [FormComponent,TableComponent],
  templateUrl: './integration.component.html',
  styleUrl: './integration.component.css'
})
export class IntegrationComponent {

}
