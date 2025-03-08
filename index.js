function saturdayFun(activity = 'roller-skate') {
    return`This Saturday, I want to ${activity}!`; 
} 
console.log(saturdayFun());
console.log(saturdayFun('go hiking'));

function mondayWork (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork());
console.log(mondayWork('work from home.'))


function wrapAdjective(wrapper = '*') {
    return function(adjective = 'special') {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    }
}


const encouragingPromptFunction = wrapAdjective('||');
console.log(encouragingPromptFunction('a dedicated programmer'));
console.log(wrapAdjective()('a hard worker')); 