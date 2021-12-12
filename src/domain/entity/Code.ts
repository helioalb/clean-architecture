export default class Code {
    private value: string;

    constructor(year: number, currentCount: string) {
        const newCount = String(parseInt(currentCount) + 1);
        this.value = `${year}${newCount.padStart(8, '0')}`
    }

    static generateFrom(year: number, currentCount: string): Code {
        return new Code(year, currentCount);
    }

    getValue(): string {
        return this.value;
    }
}
