import { draw } from "svelte/transition";
import { tonsPerCube } from "./constants";




export class Ship {
	constructor(parameters) {
		this.hull = {
			length: $state(0),
			beam : $state(0),
			draught: $state(0),
			// @ts-ignore
			blockDisplacement: $derived(this.hull.length * this.hull.beam *this.hull.draught * tonsPerCube),
			inpDisplacement: $state(0),
			inpBlockCoeff: $state(0),
			fixDisplacement: $state(false),
			
			
		}
	}
}
export const ship = new Ship()