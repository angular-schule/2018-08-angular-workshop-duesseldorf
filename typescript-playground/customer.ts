export class Customer {
    id: number;
    
    constructor(id: number) {
        this.id = id;
    }


    foo() {
        const _this = this;
        const callback = function() {
            return _this.id * 10;
        }

        const callback2 = () => this.id * 20;

        debugger;
        const city = 'Düsseldorf';
        const text = `Hallo in
${city}!`;

        console.log(text);
        console.log(callback2());
    }
}