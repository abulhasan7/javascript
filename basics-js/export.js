//modules allows you to use code from one javascript into another javascript file, making ur 
//reusable and modular

//export single function/variable etc
export function myfunction(){
    console.log("myfunction called");
}

//export many ,combined at the end

const name = 'Abul Hasa';

function lastName(){
    console.log('Mohammed');
}
export {name,lastName}
//default export

export default function defaultName (){
    console.log("defaultName called");
}
//bridge export
export {exportPrint} from './export2.js'