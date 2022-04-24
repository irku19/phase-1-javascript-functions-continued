// code your solution here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
saturdayFun("bathe my dog");

function mondayWork(duty='go to the office'){
    return `This Monday, I will ${duty}.`
}

function wrapAdjective(result= '*'){
    return function emphatic(result0 ="a hard worker"){
        return `You are ${result}${result0}${result}!`
    }

}

function wrapAdjective(result= "||"){
    return function emphatic(result0 ="a dedicated programmer"){
        return `You are ${result}${result0}${result}!`
    }

}