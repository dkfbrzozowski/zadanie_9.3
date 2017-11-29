var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
console.log(text);

var dinosaur = 'triceratops',
	dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);

var textAfter = text.replace('Velociraptor', dinosaurUpperCased);
console.log(textAfter);

var textEnd = textAfter.slice(0,textAfter.length / 2);
console.log(textEnd);
