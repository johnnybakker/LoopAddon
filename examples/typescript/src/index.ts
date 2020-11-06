//Import c++ addon with type definitions
import LoopAddon from "./loop";

/* Constant loop amount used by both loops */
const LOOP_AMOUNT: number = 100000;
const TEST_AMOUNT = 10;

for(let test = 0; test < TEST_AMOUNT; test++){

	/* C++ LOOP */
	console.time("c++");
	LoopAddon.loop(LOOP_AMOUNT);
	console.timeEnd("c++");

	/* Javascript LOOP */
	console.time("typescript");
	let counter: number = 0;
	for(let i = 0; i < LOOP_AMOUNT; i++)
		counter++;
	console.timeEnd("typescript");

}