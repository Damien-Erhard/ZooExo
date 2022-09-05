import { Food } from "./food.js";

export class GenFood{

    genList() {
       
        let list = new Array();

        list.push([0,new Food("tartare" , 10)]);
        list.push([0,new Food("herbe de provence", 3)]);

        return list;
    }
}
