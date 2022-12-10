
class Pet {

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

class Medicine {

    constructor(name, description, price, type){

        this.name = name;
        this.description = description;
        this.price = price;
        this.type =  type;
    }

    static listMedicine = {medicines:[]}
}

class Vaccine {
    
        constructor(name, description, price, type, dosage){
    
            this.name = name;
            this.description = description;
            this.price = price;
            this.type =  type;
            this.dosage = dosage;
        }
    
        static listVaccine = {vaccines:[]}
    }

class MyPet {

    constructor(pet, medicine, vaccine){

        this.pet = pet;
        this.medicine = medicine;
        this.vaccine = vaccine;
    }

    static listMyPet = {mypets:[]}
}

module.exports = {Pet, Medicine, Vaccine, MyPet}