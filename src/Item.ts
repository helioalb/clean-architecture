import Measure from "./Measure";

export default class Item {
    private measure: Measure;
    constructor(readonly id: number, readonly description: string,
        readonly price: number, measure: Measure) {
            this.measure = measure;
    }

    volume(): number {
        return this.measure.volume();
    }

    density(): number {
        return this.measure.density();
    }
}
