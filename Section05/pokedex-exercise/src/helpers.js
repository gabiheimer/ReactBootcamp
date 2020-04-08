function makeHands(arr){
    let hand1 = [], hand2 = arr.slice();
    for(var i = 0; i < arr.length /2; i++){
        let pos = Math.floor(Math.random() * hand2.length);
        hand1.push(hand2[pos]);
        hand2.splice(pos,1);
    }

    let exp1 = getExp(hand1);
    let exp2 = getExp(hand2);

    return [{cards: hand1, exp: exp1}, {cards: hand2, exp: exp2}];
}

function getExp(arr){
    let exp = 0;
    for(var i = 0; i < arr.length; i++){
        exp += arr[i].base_experience;
    }
    return exp;
}

export {makeHands};