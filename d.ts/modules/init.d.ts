export declare const arrayProto: any[];
export declare const objProto: Object;
export declare const push: (...items: any[]) => number;
export declare const pop: () => any;
export declare const slice: (start?: number | undefined, end?: number | undefined) => any[];
export declare const splice: {
    (start: number, deleteCount?: number | undefined): any[];
    (start: number, deleteCount: number, ...items: any[]): any[];
};
export declare const toString: () => string;
export declare const hasOwnProperty: (v: PropertyKey) => boolean;
