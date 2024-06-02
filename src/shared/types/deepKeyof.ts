export type deepKeyof<T> = T extends object
    ? {
        [K in keyof T]: `${Exclude<K, symbol>}${'' | `.${deepKeyof<T[K]>}`}`;
    }[keyof T] : never;