import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { powerstats } from '../../models/stats';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor() {}
  @Input() stats: powerstats;
  statsNumber: number[] = [];
  ngOnInit(): void {
    this.getStats();
  }

  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    borderColor: '#edf2f4',
    backgroundColor: '#edf2f43a',
    color: 'green',
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        ticks: {
          maxTicksLimit: 10,
        },
        grid: {
          lineWidth: 6,
        },
        angleLines: {
          display: false,
        },
        max: 100,
        min: 0,
      },
    },
  };
  public radarChartLabels: string[] = [
    'Combat',
    'Durability',
    'intelligence',
    'Power',
    'Speed',
    'Strength',
  ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      {
        data: this.statsNumber,
        label: 'Stats',
        tension: 0.05,
        pointBackgroundColor: 'black',
      },
    ],
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
  getStats(): void {
    this.statsNumber.push(this.stats.durability);
    this.statsNumber.push(this.stats.combat);
    this.statsNumber.push(this.stats.intelligence);
    this.statsNumber.push(this.stats.power);
    this.statsNumber.push(this.stats.speed);
    this.statsNumber.push(this.stats.strength);
  }
}
