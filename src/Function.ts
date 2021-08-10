import { TFunction } from './Types'

export default class Function<T> {
	private fn: TFunction<T>;
	private derivate: TFunction<T>
	private description: string

	constructor(fn: TFunction<T>, derivate:TFunction<T>, description?:string) {
		this.fn = fn
		this.derivate = derivate
		this.description = description === undefined ? '' : description
	}

	calc(x: T):T {
		return this.fn(x);
	}

	calcRange(start: number, stop: number, step: number): Array<T> {
		let ret:Array<T> = new Array<T>()

		for(let i = start; i < stop; i=+step) {
			ret.push(this.fn(i))
		}
		return ret
	}

	calcDy(x: T):T {
		return this.fn(x);
	}

	calcDyRange(start: number, stop: number, step: number): Array<T> {
		let ret:Array<T> = new Array<T>()

		for(let i = start; i < stop; i=+step) {
			ret.push(this.derivate(i))
		}
		return ret
	}

	inside(g: Function<T> | TFunction<T>, x: T): T {
		if(g instanceof Function) {
			return this.calc(g.calc(x))
		} else {
			let gf = new Function<T>(g, (args: any)=>args)
			return this.inside(gf, x)
		}
	}

	setDescription(description: string) {
		this.description = description
	}
	
	getDescription() {
		return this.description
	}

	getDerivate() {
		return this.derivate
	}

	getFn() {
		return this.fn
	}
}