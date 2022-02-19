class Tiger extends Animal{

    constructor(name,legs,breed){
        super(name,legs);
        this.breed = breed;
    }

    walk(){
        super.walk();
        console.log("Tiger walked");
    }

    makeSound(){
        console.log("roar");
    }
}