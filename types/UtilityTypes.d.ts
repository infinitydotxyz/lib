/**
 * removes optional operator from type
 */
export declare type Concrete<Type> = {
    [Key in keyof Type]-?: Type[Key];
};
export declare type Keys<Type> = keyof Type;
export declare type StringNumber = `${number}`;
export declare type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
