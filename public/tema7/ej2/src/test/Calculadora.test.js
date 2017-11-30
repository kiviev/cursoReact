
function suma(x,y){
	return parseInt(x) + parseInt(y);
}


function resta(x,y){
	return parseInt(x) - parseInt(y);
}

function mult(x,y){
	return parseInt(x) * parseInt(y);
}
function div(x,y){
	return parseInt(x) / parseInt(y);
}




// TEST
it('suma correctamente', () => {
	expect(suma(5,6)).toBe(11);
});


it('resta correctamente', () => {
	expect(resta(5,6)).toBe(-1);
});



it('multiplicacion correctamente', () => {
	expect(mult(5,6)).toBe(30);
});


it('división correctamente', () => {
	expect(div(10,5)).toBe(2);
});





