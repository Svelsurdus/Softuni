function solution (){

    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let recipesEnum = {
        apple : {carbohydrate: 1, flavour: 2},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        lemonade: {carbohydrate: 10, flavour: 20},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    return function inputHander (input){
        let actionHandler = cmd();
        let [command, macro, qunatity] = input.split(' ');
        return actionHandler[command](macro, qunatity);
    }
    
    function cmd (){
        return {
            restock:(macro, qunatity)=> {
                store[macro] = store[macro] + Number(qunatity);
                return 'Success'
            },
            prepare: (recipe, qunatity)=> {
                let isDone = true;
                let str = '';
                let copyStore = JSON.parse(JSON.stringify(store));
                for(let [key, defailtQuantity] of Object.entries(recipesEnum[recipe])){
                    let needValue = Number(qunatity) * defailtQuantity;
                    if(store[key] < needValue){
                        isDone = false;
                        str = `Error: not enough ${key} in stock`
                        break;
                    }
                    copyStore[key] -= needValue;
                }
                if(!isDone){
                    return str;
                }
                store = copyStore;
                return 'Success'
            },
            report: () =>{
                return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`
            }
        };
    }
}




let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
