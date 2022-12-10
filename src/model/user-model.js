
export default class Pet {

    constructor(type, name, age, height, weigth ){
        this.type = type;
        this.name = name;
        this.age = age;
        this.height = height;
        this.weigth = weigth;
    }

    // static createPet(type, name, age, height, weigth){
    //     return new Pet(type, name, age, height, weigth);
    // }

    static listPets = {pets:[]}
}