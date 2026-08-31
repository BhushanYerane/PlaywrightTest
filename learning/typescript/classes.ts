export class Person {
  constructor(public name: string, public age: number) {}
  describe() {
    return `${this.name} (${this.age})`;
  }
}
