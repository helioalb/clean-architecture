import FreightCalculator from "./FreightCalculator";
import Item from "./Item";

export default class SimpleFreight implements FreightCalculator {
    constructor(readonly distanceInKm: number, readonly minimumValue: number) {}

    calculate(item: Item): number {
        const total = this.distanceInKm * item.volume() * (item.density() / 100);
        return Math.max(this.minimumValue, total);
    }
}
