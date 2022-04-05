// --- module imports ---
import crypto from "crypto";
import { promisify } from "util";

// --- bind module to variable ---
const random_bytes = promisify(crypto.randomBytes);

// --- setup async/await pattern ---
;(async () => {
	// --- bind function to variable ---
	const buf = await random_bytes(32);
	// --- print random hex string of 64 characters ---
	console.log(buf.toString("hex"));
})();


/* --- outdated way to write this ---
crypto.randomBytes(32, (err, buf) => {
 	if (err){
 		throw err;
 	} else {
 		console.log(buf.toString("hex"));
 	}
 });
*/