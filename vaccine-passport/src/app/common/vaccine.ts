export class Vaccine {
    constructor(public id: string,
                public name: string,
                public manufacturer: string, 
                public dosesInRoutineSeries: number, 
                public requirement: string, 
                public alertLevel: string){

    }
}
