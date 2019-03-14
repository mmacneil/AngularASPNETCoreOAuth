export class Credentials {

    // The TypeScript compiler generates a public field for each public
    // constructor parameter and automatically assigns the parameter’s value to that field when you create heroes.
    constructor(
        public email: string,
        public password: string      
      ) {  }
}
