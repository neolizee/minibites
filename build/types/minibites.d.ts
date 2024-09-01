export declare const useHasClass: (element: HTMLElement | null, className: string) => boolean;
export declare const useNumberFormat: (number: number, maximumFractionDigits?: number) => string;
export declare const useFactorial: (number: number) => number;
export declare const useUUID: () => string;
export declare const useHEXToRGB: (hex: string) => {
    r: number;
    g: number;
    b: number;
};
export declare const useRGBToHEX: (r: number, g: number, b: number) => string;
export declare const useRGBAToHEX: (r: number, g: number, b: number, a: number) => string;
export declare const useBinarySearch: (collection: number[], number: number) => number;
export declare const useHashingMap: (collection: any[], property: string) => Map<any, any>;
export declare class Node {
    value: any;
    next: Node | null;
    constructor(value: any, next?: Node | null);
}
export declare class CreateLinkedList {
    head: Node | null;
    constructor();
    add(value: any): void;
    print(): void;
    delete(value: any): void;
    find(value: any): Node | null;
}
