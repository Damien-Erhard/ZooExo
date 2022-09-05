import { GenFood } from "../food/genFood.js";


export class Zoo{
    animalsList;
    foodsList;
    
    constructor(){
        this.animalsList = new Array();
        this.foodsList = GenFood.prototype.genList();
    }
    
    get foodsList(){
    return foodsList;
    }
}