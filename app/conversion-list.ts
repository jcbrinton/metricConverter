import { Conversion } from './conversion';

export const CONVERSIONS: Conversion[] = [
  { metricUnit: 'kg', nonMetricUnit: 'lbs', conversionRate: 2.20462, conversionConstant: 0 },
  { metricUnit: 'km', nonMetricUnit: 'mile', conversionRate: 0.621371, conversionConstant: 0 },
  { metricUnit: 'm', nonMetricUnit: 'ft', conversionRate: 3.28084, conversionConstant: 0 },
  { metricUnit: 'cm', nonMetricUnit: 'inch', conversionRate: 0.393701, conversionConstant: 0 },
  { metricUnit: 'C', nonMetricUnit: 'F', conversionRate: 1.8, conversionConstant: 32}
];