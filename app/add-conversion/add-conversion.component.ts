import { Component, OnInit, Input } from '@angular/core';
import { Conversion } from '../conversion';
import { CONVERSIONS } from '../conversion-list';

@Component({
  selector: 'app-add-conversion',
  templateUrl: './add-conversion.component.html',
  styleUrls: ['./add-conversion.component.css']
})
export class AddConversionComponent implements OnInit {
	@Input() conversion?: Conversion;
	
	conversions = CONVERSIONS;

  constructor() { }

  ngOnInit(): void {
  }

	add(metric: string, nonMetric: string , rate: string, constant: string): void {
   this.conversions.push({ metricUnit: metric, nonMetricUnit: nonMetric, conversionRate: Number(rate), conversionConstant: Number(constant) });
  
}

}
