export default class CPF {
    private cpfDigits: Array<number>;

    constructor (cpf: string) {
        this.cpfDigits = this.extractCPFDigits(cpf);
    }

    private extractCPFDigits(cpf: string): Array<number> {
        const cpfWithoutMask = cpf.replace(/\./g, '').replace('-', '');
        return cpfWithoutMask.split('').map(char => parseInt(char));
    }

    public isValid(): boolean {
        const VALID_CPF_LENGTH = 11;
        if (this.cpfDigits.length !== VALID_CPF_LENGTH) return false;
        if (this.areEveryDigitOfCPFIdentical()) return false;
        return this.cpfCheckDigits().equals(this.calculatedCheckDigits());
    }

    private areEveryDigitOfCPFIdentical(): boolean {
        return this.cpfDigits.every(c => c === this.cpfDigits[0]);
    }

    private cpfCheckDigits(): CheckDigits {
        return new CheckDigits(this.cpfDigits[9], this.cpfDigits[10]);
    }

    private calculatedCheckDigits(): CheckDigits {
        const cpfFirstPart = this.cpfDigits.slice(0, 9);
        let sumForFirstCheckDigit = 0;
        let sumForSecondCheckDigit = 0;
        cpfFirstPart.forEach((digit, index) => {
            sumForFirstCheckDigit += (10 - index) * digit;
            sumForSecondCheckDigit += (11 - index) * digit;
        });
        const first = this.calculateVerificatonNumber(sumForFirstCheckDigit);
        sumForSecondCheckDigit += 2 * first;
        const second = this.calculateVerificatonNumber(sumForSecondCheckDigit);
        return new CheckDigits(first, second);
    }

    private calculateVerificatonNumber(sum: number): number {
        const mod = (sum % 11);
        return (mod < 2) ?  0 : 11 - mod;
    }
}

class CheckDigits {
    first: number;
    second: number;

    constructor(first: number, second: number) {
        this.first = first;
        this.second = second;
    }

    equals(other: CheckDigits) {
        return (this.first === other.first && this.second === other.second);
    }
}
