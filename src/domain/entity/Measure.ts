export default class Measure {
    constructor(readonly height: number, readonly width: number,
        readonly depth: number, readonly weight: number) {}

    volume(): number {
        return this.height / 100 * this.width /100 * this.depth / 100;
    }

    density(): number {
        return Math.round(this.weight / this.volume());
    }
}
