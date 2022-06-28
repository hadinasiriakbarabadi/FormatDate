import { Component } from '@angular/core';
import { FormatDate, FormatNumber, FORMAT_NUMBER } from 'pl-decorator';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'formatDate';
  @FormatNumber([FORMAT_NUMBER.EN])
  public value: number;

  /**declare variable currency with FormatNumber annotation, for format it  */
  @FormatNumber(FORMAT_NUMBER.EN, { style: 'currency', currency: 'EUR' })
  public currency: number;

  /**declare variable value with FormatDate annotation, for format it */
  @FormatDate("DD/MM/YYYY HH:mm:ss")
  public time: Date ;
public user:any;
  /**valorize time variable with current or other Date*/
  constructor() {
    this.time = new Date();
    this.value = 2736288199283779;
    this.currency=2144287;
  }

  /** print variable value */
  ngOnInit() {
    this.user= {time:this.time} as User;
    console.log(`                 Date : ${new Date()} , 
                 Date formatted : ${this.user.time} 
                 Value formatted:  ${this.value}  
                 Currency formatted:  ${this.currency}`);
  }
}
