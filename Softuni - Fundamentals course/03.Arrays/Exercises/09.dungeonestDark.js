function darkestDungeon(input) {

    let health = 100;
    let coins = 0;

    let rooms = input.shift().split('|')

    for (let i = 0; i < rooms.length; i++) {
        let tokens = rooms[i].split(' ')
        let command = tokens.shift();
        let value = tokens.shift();

        switch (command) {

            case 'potion':
                health += Number(value);

                if(health > 100){
                    let healedAmmount =  Number(value) - (health - 100);
                    health = 100;
                    console.log(`You healed for ${healedAmmount} hp.`);
                    console.log(`Current health: ${health} hp.`);
                } else {
                    console.log(`You healed for ${value} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }

                break;
            case 'chest':
                coins += Number(value);
                console.log(`You found ${value} coins.`);
                break;
            default:
                health -= value;
                if(health > 0){
                    console.log(`You slayed ${command}.`);
                } else if(health <= 0){
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                }
        }
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);

}
darkestDungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
darkestDungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);