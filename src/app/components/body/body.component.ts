import {Component} from '@angular/core'


@Component ({
    selector: 'app-body',
    templateUrl: './body.component.html'

})

export class BodyComponent {

    mostrar: false
   frase:any = {
        mensaje:'Un gran poder conlleva una gran responsabilidad',
        autor:'Ben No se que'
    }

    personajes: string [] = ['Capitana Marvel','Gamora','Thor']

}