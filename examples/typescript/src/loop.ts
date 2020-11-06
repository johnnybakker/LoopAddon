//Custom made type definition for c++ addon
interface LoopAddon {
	loop(amount: number): void;
}

//Import c++ addon and assign type defentition
const loopAddon: LoopAddon = require('../../../addon');

//Export c++ addon with type definition
export default loopAddon;