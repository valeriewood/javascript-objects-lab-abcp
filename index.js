
 var recipe = { 
  title: 'Bootcamp Prep',
  description: 'Sophie'
};

 
myRecip;
  

 
var newObj = Object.assign({}, recipe, {description: "Sophie DeBenedetto"});
 
newObj;


 delete newObj["Bootcamp Prep"];

 
newObj // {}
 
Object.assign({}, course, {description: "Introduction to JS"});
