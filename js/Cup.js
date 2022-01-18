class Cup{
    constructor(name, description, value){
        this.name = name;
        this.description = description;
        this.value = value;
        this.champions = [];
    }

    //Funcion de prueba
    addChampion(newChampion, year){
        const obj = {
            name: newChampion,
            year: year
        };
        this.champions.push(obj);
    }
}