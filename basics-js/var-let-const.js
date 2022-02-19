(function varcheck(){

    var elem = 10;
    let letelem = 100;
    const constelem = 1000;

    console.log("elem is "+elem);
    console.log("letelem is "+letelem);
    console.log("constelem is "+constelem);

    if(true){

        var elem = 20;
        console.log("elem inside {} block is "+elem);

        let letelem = 200;
        console.log("letelem inside {} block is "+letelem);

        const constelem = 2000;
        console.log("constelem inside {} block is "+constelem);

    }
    console.log("elem after block is "+elem);
    console.log("letelem after block is "+letelem);
    console.log("constelem after block is "+constelem);

    //reassign let and const

    letelem = 300;
    console.log("elem after reassignment is "+elem);

    //const throws error as can't reassign
    constelem = 3000;

})();