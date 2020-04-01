function choice(items){
    return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item){
    let ans = items.filter(function(it){
        return it !== item;
    });

    return ans;
}

export {choice, remove};