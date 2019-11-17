export default {
    fileName: `/lib.es2018.asyncgenerator.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: `/// <reference no-default-lib="true"/>\n/// <reference lib="es2018.asynciterable" />\ninterface AsyncGenerator<T=unknown,TReturn=any,TNext=unknown> extends AsyncIterator<T,TReturn,TNext>{next(...args:[]|[TNext]):Promise<IteratorResult<T,TReturn>>;return (value:TReturn|PromiseLike<TReturn>):Promise<IteratorResult<T,TReturn>>;throw (e:any):Promise<IteratorResult<T,TReturn>>;[Symbol.asyncIterator]():AsyncGenerator<T,TReturn,TNext>;}interface AsyncGeneratorFunction{/** * Creates a new AsyncGenerator object. * @param args A list of arguments the function accepts. */new (...args:any[]):AsyncGenerator;/** * Creates a new AsyncGenerator object. * @param args A list of arguments the function accepts. */(...args:any[]):AsyncGenerator;/** * The length of the arguments. */readonly length:number;/** * Returns the name of the function. */readonly name:string;/** * A reference to the prototype. */readonly prototype:AsyncGenerator;}interface AsyncGeneratorFunctionConstructor{/** * Creates a new AsyncGenerator function. * @param args A list of arguments the function accepts. */new (...args:string[]):AsyncGeneratorFunction;/** * Creates a new AsyncGenerator function. * @param args A list of arguments the function accepts. */(...args:string[]):AsyncGeneratorFunction;/** * The length of the arguments. */readonly length:number;/** * Returns the name of the function. */readonly name:string;/** * A reference to the prototype. */readonly prototype:AsyncGeneratorFunction;}`
};