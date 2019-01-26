import { Component, OnInit, ViewChild } from '@angular/core';
import { ShowsService } from '../services/shows.service';
import { Show } from '../models/show';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options, EventObject } from 'fullcalendar';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  shows: EventObject[] = [];
  loading: boolean;

  constructor(
    public showsService: ShowsService
  ) { }

  ngOnInit() {
    this.calendarOptions = {
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: this.shows
    };
    this.getCurrentShows();
  }

  getCurrentShows() {
    this.loading = true;
    this.showsService.getCurrentShows().subscribe(
      shows => {
        shows.forEach(show => {
          this.shows.push({
            id: show.ShowId,
            title: show.Movie.MovieName,
            start: show.ShowDateTime
          })
        })
        this.loading = false;
      }
    )
  }

}
