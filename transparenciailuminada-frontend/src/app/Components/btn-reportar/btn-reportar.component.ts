import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-btn-reportar',
  imports: [MatIconModule,MatDividerModule,MatButtonModule,RouterModule],
  templateUrl: './btn-reportar.component.html',
  styleUrl: './btn-reportar.component.css'
})
export class BtnReportarComponent {

}
