// from swagger
// we don't want to have to include nextjs/swagger in the FE code

export interface TypeX<T = any> extends Function {
  new (...args: any[]): T;
}

export declare function IntersectionTypeX<A, B>(classARef: TypeX<A>, classBRef: TypeX<B>): TypeX<A & B>;
export declare function PartialTypeX<T>(classRef: TypeX<T>): TypeX<Partial<T>>;
