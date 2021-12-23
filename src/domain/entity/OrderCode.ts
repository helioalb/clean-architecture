export default class OrderCode {
    value: string;

    constructor(date: Date, sequence: number) {
        this.value = this.generateCode(date.getFullYear(), sequence);
    }

    private generateCode(year: number, sequence: number): string {
        return `${year}${sequence.toString().padStart(8, '0')}`;
    }
}
