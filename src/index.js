// import Pet from './model/pet-model.js';
import readlineSync from 'readline-sync';

// init app

class Pet {

    constructor(type, name, age, height, weigth ){
        this.type = type;
        this.name = name;
        this.age = age;
        this.height = height;
        this.weigth = weigth;
    }

    static listPets = []
}

class Medicine {
    constructor(name, description, price, type){
        this.name = name;
        this.description = description;
        this.price = price;
        this.type =  type;
    }

    static listMedicine = []
}

class Vaccine {
    constructor(name, description, price, type, dosage){
        this.name = name;
        this.description = description;
        this.price = price;
        this.type =  type;
        this.dosage = dosage;
    }

    static listVaccine = []
}

class MyPet {
    constructor(pet, medicine, vaccine){
        this.pet = pet;
        this.medicine = medicine;
        this.vaccine = vaccine;
    }

    static listMyPet = []
}


const createPet = new Pet();

const options = {}
options.name = readlineSync.question('qual o nome do seu pet? ');
options.type = readlineSync.question('qual o tipo do seu pet? ');
options.age = readlineSync.question('qual a idade do seu pet? ');
options.height = readlineSync.question('qual a altura do seu pet? ');
options.weigth = readlineSync.question('qual o peso do seu pet? ');


createPet.listPets = options;

console.log(createPet.listPets);


const createMedicine = new Medicine();

const optionsMedicine = {}
optionsMedicine.name = readlineSync.question('qual o nome do medicamento? ');
optionsMedicine.description = readlineSync.question('qual a descrição do medicamento? ');
optionsMedicine.price = readlineSync.question('qual o preço do medicamento? ');
optionsMedicine.type = readlineSync.question('qual o tipo do medicamento? ');

createMedicine.listMedicine = optionsMedicine;
console.log(createMedicine.listMedicine);


const createVaccine = new Vaccine();

const optionsVaccine = {}

optionsVaccine.name = readlineSync.question('qual o nome da vacina? ');
optionsVaccine.description = readlineSync.question('qual a descrição da vacina? ');
optionsVaccine.price = readlineSync.question('qual o preço da vacina? ');
optionsVaccine.type = readlineSync.question('qual o tipo da vacina? ');
optionsVaccine.dosage = readlineSync.question('qual a dosagem da vacina? ');

createVaccine.listVaccine = optionsVaccine;

console.log(createVaccine.listVaccine);

const createMyPet = new MyPet();

const optionsMyPet = {}

optionsMyPet.pet = createPet.listPets;
optionsMyPet.medicine = createMedicine.listMedicine;
optionsMyPet.vaccine = createVaccine.listVaccine;

createMyPet.listMyPet = optionsMyPet;

console.log(createMyPet.listMyPet);

// tenho que fazer um loop para cadastrar mais de um pet

// tenho que fazer um loop para cadastrar mais de um medicamento

// tenho que fazer um loop para cadastrar mais de uma vacina

// pesquisar por nome do pet

// pesquisar por nome do medicamento para este pet

// pesquisar por nome da vacina para este pet