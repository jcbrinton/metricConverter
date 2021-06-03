import { Component, OnInit } from '@angular/core';
import { Conversion } from '../conversion';
import { CONVERSIONS } from '../conversion-list';

@Component({
  selector: 'app-conversions',
  templateUrl: './conversions.component.html',
  styleUrls: ['./conversions.component.css']
})
export class ConversionsComponent implements OnInit {
	
	conversions = CONVERSIONS;
	selectedConversion?: Conversion;
	metricValue = 0;
	nonMetricValue = 0;


  constructor() { }

  ngOnInit(): void {
  }
  
  resetValues(conversion: Conversion): void{
	this.metricValue = 1;
	this.nonMetricValue = this.metricValue * conversion.conversionRate + conversion.conversionConstant;
	  
  }
  onSelect(conversion: Conversion): void {
    this.selectedConversion = conversion;
	this.resetValues(conversion);
  }
  
  convertTo(selectedConversion: Conversion): void {
	  this.nonMetricValue = this.metricValue * selectedConversion.conversionRate + selectedConversion.conversionConstant;
  }
  
  convertFrom(selectedConversion: Conversion): void {
	  this.metricValue = (this.nonMetricValue - selectedConversion.conversionConstant) / selectedConversion.conversionRate ;
  }


}
