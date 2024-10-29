import { Injectable } from '@angular/core';
import {interval, map, Observable} from "rxjs";

@Injectable()
export class MultipleServiceService {

  readonly now$: Observable<Date> = interval(1000).pipe(map(() => new Date()));

  constructor() { }


}
