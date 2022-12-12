let me: string = 'Junaid';
// Can assign a string to a string only and vice versa
me = 'Khan';

// With Type any, It can assign any data type
let album: any;

album = 'Jazz';
// console.log(album);
album = true;
// console.log(album);
album = 12;
// console.log(album);

// console.log(me);

const sum = (a: number, b: number) => {
	return a + b;
};
// console.log(sum(1, 4));

let pen: string | number;
