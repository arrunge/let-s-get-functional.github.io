// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//I: takes in array of customer object
//O: returns the number of the male customers
//C: use filter
//
var maleCount = function(array) {
  //invoke filter function (array, callback func)
  //return _.filter(array, (customer) => customer.gender === 'male').length; -> streamline approach
  const males = _.filter(array, function(customer){
    return customer.gender === 'male';
  });
  return males.length;
};

//I: takes in array of customer object
//O: returns the number of the female customers
//C: use reduce
//
var femaleCount = function(array){
 
  //invoke reduce (array, function, seed) and return reduce output
  let femaleCount =  _.reduce(array, function(accumulator, customer){
         if(customer.gender === "female"){
        accumulator ++;
      } 
      return accumulator;
    }, 0);

      return femaleCount;
};

//I: array
//O: string - oldest person name
var oldestCustomer = function(array){
//outputString
let outputString = array[0].name;
//var to track age - 0index of age saved  
let age = array[0].age;
//iterate through array
for (let index = 1; index < array.length; index++){
  //compare ages
  if(age < array[index].age){
    //updates age
    age = array[index].age;
    //stores name of oldest
    outputString = array[index].name;
  }
}
//return name
return outputString;
};
//I: array
//O: string - youngest customer name
var youngestCustomer = function(array){
  //output string - zero index
  let outputString = array[0].name;
  //age var - starts at index 0
  let age = array[0].age;
  //iterate through array - start at 1 index
  for (let index = 1; index < array.length; index++){
    //compare age
    if(age > array[index].age){
      //update age if younger
      age = array[index].age;
      //update name 
      outputString = array[index].name;
    }
  }
  //return youngest name
  return outputString;
};
//I:array
//O: return number - value of average of all balances
var averageBalance = function (array){
  //output 
  let totalBalance = 0;
  //iterate through array to get balance
  for (let index = 0; index < array.length; index++){
    //split up string of balance by $
    let arrayBal = array[index]["balance"].split('$');
    //split up string to remove ,
    let bal = arrayBal[1].split(',');
    //recombine balance 
    let balance1 = bal[0] + bal[1];
    //convert balance to number - parseFLoat
    totalBalance += parseFloat(balance1);
   
  }
  //calculate and return average
  return totalBalance / array.length;
};
//I: array, string - letter 
//O: output the number of customers that start with letter given
var firstLetterCount = function(array, letter){
  //counter array
  let counter = [];
  //iterate through array - customers
  for(let index = 0; index < array.length; index++){
    //check for letter matching the first letter of name
    if (array[index].name[0].toLowerCase() === letter.toLowerCase()){
      //add one to counter if letter matches
      counter.push(1);
    }
  }
  //return number of matches - counter length
  return counter.length;
};
//I:array- customers; name - string; letter - string 
//O: return number of of friends that matches starts with input letter

var friendFirstLetterCount = function(array, name, letter){
  //counter array
  let counter = [];
  //iterate through array to find object that matches name
  for (let index = 0; index < array.length; index ++){
    //determine if input name matches array - customers
    if(array[index].name.toLowerCase() === name.toLowerCase()){
      //if name matches - iterate through friends array to match input lette
      for (let j = 0; j < array[index].friends.length; j++){
        if (array[index].friends[j].name[0].toLowerCase() === letter.toLowerCase()){
          //if letter matches first letter of friends name add to count
          counter.push(1);
        }
      }
    }
  }
  //return length of counter - number of matches
  return counter.length;
  
};
//I: array and name-string
//O: return array of customers that have input name in friends list

var friendsCount = function(array, name){
  //output array
  let friendMatch = [];
  //iterate through customers list
  for (let index = 0; index < array.length; index++){
    //iterate through the customer's friends list
    for(let j = 0; j < array[index].friends.length; j++){
      //check for name in friends list
      if(array[index]['friends'][j]['name'] === name){
        //if a match
        friendMatch.push(array[index].name);
      }
    }
  }
  //return array of matches
  return friendMatch;
};
//I:array - customers
//O:return array  - of top 3 tags

var topThreeTags = function(array){
     //array of all tags
  let masterTagsList = [];
  //loop to get all the tags
  for (let index = 0; index < array.length; index++){
    //loop through to add each tag word to allTagsList
    for (let j = 0; j <array[index]['tags'].length; j++){
      masterTagsList.push(array[index]['tags'][j]);
    }   
  }
  //dedup function to have a list of all individual tags
  //let tagOptions = _.dedup(masterTagsList);
  
  //loop for reduce function - determine number of times word occurs in masterTagsList
    let tagCount =  _.reduce(masterTagsList, function(accumulator, current){
      if (accumulator[current] !== undefined){
        accumulator[current] ++;
      } else {
        accumulator[current] = 1;
      }
      return accumulator;
   } 
  , {}); 
  
  let tagArray = [];
  for(let key in tagCount){
    tagArray.push([key,tagCount[key]]);
  }
 
  let sortedArray =  tagArray.sort(function(a, b){
    return b[1] - a[1];
  });
  //output array
  let outputArray = [sortedArray[0][0], sortedArray[1][0], sortedArray[2][0]];
  console.log(outputArray);
  return outputArray;


};
//I:array
//O:object with breakdown of genders
//E: use reduce
var genderCount = function(array){
    //invoke reduce (array, function, seed) and return femaleCount
  let femaleCount =  _.reduce(array, function(accumulator, customer){
    if(customer.gender === "female"){
   accumulator ++;
 } 
 return accumulator;
}, 0);
//invoke reduce (array, function, seed) and return maleCount
let maleCount =  _.reduce(array, function(accumulator, customer){
  if(customer.gender === "male"){
 accumulator ++;
} 
return accumulator;
}, 0);
//invoke reduce (array, function, seed) and return nonbinaryCount
let nonBinaryCount =  _.reduce(array, function(accumulator, customer){
  if(customer.gender === "non-binary"){
 accumulator ++;
} 
return accumulator;
}, 0);
//output object

let genderObject = {
  'male':  maleCount,
  'female': femaleCount,
  'non-binary': nonBinaryCount,
};
return genderObject;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
