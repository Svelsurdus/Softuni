function carwash(array){

    let sum = 0;
    let soap = x => x + 10;
    let water = x => x + x * 0.2;
    let vacuum = x => x + x * 0.25;
    let mud = x => x - x * 0.10; 

    for (let i = 0; i < array.length; i++) {
        if(array[i] === 'soap'){
            sum = soap(sum)
        } else if(array[i] === 'water'){
            sum = water(sum)
        } else if(array[i] === 'vacuum cleaner'){
            sum = vacuum(sum)
        } else if(array[i] === 'mud'){
            sum = mud(sum)
        }
        
    }

    console.log(`The car is ${sum.toFixed(2)}% clean.`);
}
carwash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carwash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);