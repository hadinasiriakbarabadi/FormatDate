import { Component } from '@angular/core';
import { FormatDate, FormatNumber, FORMAT_NUMBER } from 'pl-decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'formatDate';
  @FormatNumber([FORMAT_NUMBER.AR])
  public value: number;

  /**declare variable currency with FormatNumber annotation, for format it  */
  @FormatNumber(FORMAT_NUMBER.HI, { style: 'currency', currency: 'EUR' })
  public currency: number;

  /**declare variable value with FormatDate annotation, for format it */
  @FormatDate("DD/MM/YYYY HH:mm:ss")
  public time: Date ;

  /**valorize time variable with current or other Date*/
  constructor() {
    this.time = new Date();
    this.value = 2736288199283779;
    this.currency=2144287;
  }

  /** print variable value */
  ngOnInit() {
    console.log(`                 Date : ${new Date()} , 
                 Date formatted : ${this.time} 
                 Value formatted:  ${this.value}  
                 Currency formatted:  ${this.currency}`);
  }
}
