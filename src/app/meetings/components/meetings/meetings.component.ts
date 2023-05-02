import { Component } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.sass']
})

export class MeetingsComponent {

  eventList: string[] = ['1', '2', '3', '4', '5', '6']

}
