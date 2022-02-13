class MyClass{
    constructor(x,y,z){
            this.x =x;
            this.y = y;
            this.z = z;
    }
    multiply(){
        return this.x * this.y;
    }
}

const obj = new MyClass(10,10,10);
console.log(obj.multiply())