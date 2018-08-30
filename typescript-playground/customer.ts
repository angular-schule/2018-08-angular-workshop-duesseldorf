export class Customer {
    
    bar: number;

    constructor(public id: number, bar?: number) {
        this.bar = bar;
    } 

    myMethod(arg: string | number) {
        if (typeof arg === 'number') {
            return arg;
        }

        return arg;
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