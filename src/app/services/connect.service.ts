import { Injectable } from "@angular/core";

@Injectable()
export class ConnectService{

    constructor(){

    }
    connect(){
        const phone = '+918700838844';
        const text = 'I want to know more about your services!'
        const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(whatsappLink,'_blank');
      }
}