export default interface Http {
    on (url: string, method: string, fn: any): void;
    listen(porto: number): void;
}
