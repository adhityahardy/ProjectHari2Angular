import { Component, OnInit } from '@angular/core';
import { Tutorial } from './models/tutorial.model';
import { TutorialService } from './services/tutorial.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rakamin';
  tutorials: Tutorial[] = [];

  constructor(
    private tutorialService: TutorialService,
    private http: HttpClient
  ) {

  }

  ngOnInit(): void {
    this.getDataTutorial()
  }

  getDataTutorial() {
    this.tutorialService.getAll().subscribe((res) => {
      console.log('success get data',res);
      this.tutorials = res;
    })
  }

  getDataTutorialId(id: any) {
    this.tutorialService.get(id).subscribe((res) => {
      console.log('success get data',res);
    })
  }

  addData(newTutorial: Tutorial) {
    this.tutorialService.create(newTutorial).subscribe((res) => {
      console.log('success add data', res);
      // Optionally, you can update the tutorials array or refresh the data after addition.
      this.getDataTutorial();
    });
  }

  deleteData(id: any) {
    this.tutorialService.delete(id).subscribe((res) => {
      console.log('success deleted data', res);

      // Optionally, you can update the tutorials array or refresh the data after deletion.
      this.getDataTutorial();
    })
  }
}
