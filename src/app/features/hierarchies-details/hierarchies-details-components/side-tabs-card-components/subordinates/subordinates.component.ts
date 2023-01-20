import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SubordinatesData, SubordinatesApiResponse } from 'src/app/services/subordinate/subordinates';
import { SubordinatesService } from 'src/app/services/subordinate/subordinates.service';

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  styleUrls: ['./subordinates.component.scss']
})

export class SubordinatesComponent implements OnChanges {

  @Input() isSubordinatesClick: boolean = false;

  public subordinatesList: SubordinatesData[] = [];

  constructor(
    private subordindateService: SubordinatesService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isSubordinatesClick) {
      this.getSubordinates()
    };
  }

  public getSubordinates(): void {
    this.subordindateService.getSubordinates().subscribe({
      next: (res: SubordinatesApiResponse) => {
        this.subordinatesList = res.data;
      },
      error: (err) => {
        console.log(err.message);
      }
    });
  }
}
