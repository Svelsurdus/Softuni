function furniture(input) {

    let text = input.join(' ');
    let furnitureArr = [];
    let totalSum = 0;
    let pattern =
        /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/gm;
    let valid;

    while ((valid = pattern.exec(text)) !== null) {

        let validName = valid.groups['furniture'];
        let validPrice = Number(valid.groups['price']);
        let validQuantity = Number(valid.groups['quantity']);

        furnitureArr.push(validName);
        totalSum += validPrice * validQuantity;


    }
    console.log('Bought furniture:');
    furnitureArr.forEach(el => console.log(el));
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);


}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
);
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
);

furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']
);