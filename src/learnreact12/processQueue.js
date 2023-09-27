export function getFinalState(baseState, queue) {
    let finalState = baseState;

    if(typeof queue[queue.length-1] === 'number') {
        finalState = queue[queue.length-1];
    } else {
        let number = 0;

        queue.forEach(function(qu) {
            if(typeof qu === 'number') {
                number = qu;
            } else if(typeof qu === 'function') {
                number = qu(number);
            }
        });
        finalState = number;
    }
    return finalState;
}