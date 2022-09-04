class Zoo{
    animalsList;
    foodsList;
    
    constructor(){
        this.animalsList = new Array();
        this.foodsList = GenFood.genList();
        console.log(foodsList);
    }
    
    get foodsList(){
    return foodsList;
    }
}