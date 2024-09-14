export declare const useHasClass: (element: HTMLElement | null, className: string) => boolean;
export declare const useNumberFormat: (number: number, maximumFractionDigits?: number) => string;
export declare const useUUID4: () => string;
export declare const useHEXToRGB: (hex: string) => string;
export declare const useRGBToHEX: (r: number, g: number, b: number) => string;
export declare const useRGBAToHEX: (r: number, g: number, b: number, a: number) => string;
export declare const useHSLAToRGBA: (hue: number, saturation: number, lightness: number, alpha: number) => string;
export declare const useBinarySearch: (collection: number[], target: number) => number;
export declare const useQuickSort: (collection: number[]) => number[];
export declare const useInsertionSort: (collection: number[], low: number, high: number) => void;
export declare const useMergeSort: (collection: number[], low: number, mid: number, high: number) => void;
export declare const useTimSort: (collection: number[]) => number[];
export declare const useFlashSort: (collection: number[]) => number[];
export declare const useHashMap: <T>(collection: T[], property: keyof T) => Map<any, T>;
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
export declare const useCheckCreditCard: (number: string) => boolean;
export declare const useCheckType: (value: unknown) => string;
export declare const useBMSearch: (text: string, pattern: string) => number[];
