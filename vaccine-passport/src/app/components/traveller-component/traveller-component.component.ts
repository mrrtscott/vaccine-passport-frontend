import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Traveller } from 'src/app/common/traveller';
import { TravellerService } from 'src/app/services/traveller.service';

@Component({
  selector: 'app-traveller-component',
  templateUrl: './traveller-component.component.html',
  styleUrls: ['./traveller-component.component.css']
})
export class TravellerComponentComponent implements OnInit {

  traveller: Traveller[] = [];
  currentPassportNumber: string = '';


  constructor(private travellerService: TravellerService,
               private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.listTraveller();
        
      });
  }

  listTraveller(){
    //Checking to see whether id parameter inserted

    const hasPassportNumber: boolean = this.route.snapshot.paramMap.has('passportNumber');

    if(hasPassportNumber){
      this.currentPassportNumber = this.route.snapshot.paramMap.get('passportNumber') || '';
    }


    this.travellerService.getTravellerList(this.currentPassportNumber).subscribe(
      data =>{
        this.traveller = data
      }
    )

  }

  

}
