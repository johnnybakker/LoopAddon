const LoopAddon = require("../../../addon");

/* Constant loop amount used by both loops */
const LOOP_AMOUNT = 100000;
const TEST_AMOUNT = 10;

for(let test = 0; test < TEST_AMOUNT; test++){

	/* C++ LOOP */
	console.time("c++");
	LoopAddon.loop(LOOP_AMOUNT);
	console.timeEnd("c++");

	/* Javascript LOOP */
	console.time("javascript");
	let counter = 0;
	for(let i = 0; i < LOOP_AMOUNT; i++)
		counter++;
	console.timeEnd("javascript");

}