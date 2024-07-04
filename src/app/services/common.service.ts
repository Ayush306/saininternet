import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class CommonService{

     headerChangeSubject = new BehaviorSubject('initial-header-class');

     headerClass$ = this.headerChangeSubject.asObservable();
     setHeaderClass(className:string):void{
        this.headerChangeSubject.next(className);
     }
}