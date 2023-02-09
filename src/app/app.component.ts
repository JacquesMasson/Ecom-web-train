import { Component, AfterContentInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit{
  title = 'Ecom-web-train';

  ngAfterContentInit(): void {
  }

  ngOnInit(): void {
  }
}
