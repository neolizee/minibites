'use strict';

/* Проверка класса HTML элемента -------------------------------------------------------------------------------------------------------- */
const useHasClass = (element, className) => {
    // Проверяем наличие входных значений || false
    if (!element || !className) {
        return false;
    }
    const classNames = " " + element.className + " ";
    className = " " + className + " ";
    return classNames.replace(/[\r\n\t\f]+/g, " ").indexOf(className) > -1;
};
/* Форматирование в денежную единицу Российской Федерации ------------------------------------------------------------------------------- */
const useNumberFormat = (number, maximumFractionDigits = 0) => {
    if (number != null) {
        return new Intl.NumberFormat("ru-RU", {
            maximumFractionDigits: maximumFractionDigits,
            style: "currency",
            currency: "RUB",
        }).format(number !== null && number !== void 0 ? number : 0);
    }
    return "";
};
/* Вычисление факториала ---------------------------------------------------------------------------------------------------------------- */
const useFactorial = (number) => (number <= 1 ? number : number * useFactorial(number - 1));
/* Создание UUID v4 --------------------------------------------------------------------------------------------------------------------- */
const useUUID = () => crypto.randomUUID();
/* Форматирование HEX в RGB ------------------------------------------------------------------------------------------------------------- */
const useHEXToRGB = (hex) => {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
};
/* Форматирование RGB в HEX ------------------------------------------------------------------------------------------------------------- */
const useRGBToHEX = (r, g, b) => {
    return "#"
        .concat(r.toString(16).padStart(2, "0"))
        .concat(g.toString(16).padStart(2, "0"))
        .concat(b.toString(16).padStart(2, "0"));
};
/* Форматирование RGBA в HEX ------------------------------------------------------------------------------------------------------------ */
const useRGBAToHEX = (r, g, b, a) => {
    return "#"
        .concat(r.toString(16).padStart(2, "0"))
        .concat(g.toString(16).padStart(2, "0"))
        .concat(b.toString(16).padStart(2, "0"))
        .concat(Math.round(a * 255)
        .toString(16)
        .padStart(2, "0"));
};
/* Бинарный поиск ----------------------------------------------------------------------------------------------------------------------- */
const useBinarySearch = (collection, target) => {
    let low = 0;
    let high = collection.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (target === collection[mid]) {
            return mid;
        }
        if (target > collection[mid]) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
};
/* Сортировка Quick ----------------------------------------------------------------------------------------------------------------- */
const useQuickSort = (collection) => {
    if (collection.length <= 1)
        return collection;
    const target = collection[Math.floor(collection.length / 2)];
    const low = [];
    const high = [];
    for (let i = 0; i < collection.length; i++) {
        if (i === Math.floor(collection.length / 2))
            continue;
        if (collection[i] < target) {
            low.push(collection[i]);
        }
        else {
            high.push(collection[i]);
        }
    }
    return [...useQuickSort(low), target, ...useQuickSort(high)];
};
/* Сортировка Insertion ------------------------------------------------------------------------------------------------------------------- */
const useInsertionSort = (collection, low, high) => {
    for (let i = low + 1; i <= high; i++) {
        let key = collection[i];
        let j = i - 1;
        while (j >= low && collection[j] > key) {
            collection[j + 1] = collection[j];
            j--;
        }
        collection[j + 1] = key;
    }
};
/* Сортировка Merge ------------------------------------------------------------------------------------------------------------------- */
const useMergeSort = (collection, low, mid, high) => {
    let left = collection.slice(low, mid + 1);
    let right = collection.slice(mid + 1, high + 1);
    let i = 0, j = 0, k = low;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            collection[k] = left[i];
            i++;
        }
        else {
            collection[k] = right[j];
            j++;
        }
        k++;
    }
    while (i < left.length) {
        collection[k] = left[i];
        i++;
        k++;
    }
    while (j < right.length) {
        collection[k] = right[j];
        j++;
        k++;
    }
};
/* Сортировка Tim ------------------------------------------------------------------------------------------------------------------- */
const useTimSort = (collection) => {
    const start = 32;
    for (let i = 0; i < collection.length; i += start)
        useInsertionSort(collection, i, Math.min(i + 31, collection.length - 1));
    for (let size = start; size < collection.length; size = 2 * size) {
        for (let low = 0; low < collection.length; low += 2 * size) {
            let mid = low + size - 1;
            let high = Math.min(low + 2 * size - 1, collection.length - 1);
            if (mid < high)
                useMergeSort(collection, low, mid, high);
        }
    }
    return collection;
};
/* Форматирование в HashMap --------------------------------------------------------------------------------------------------------- */
const useHashMap = (collection, property) => {
    // Проверяем наличие входных значений || []
    if (!collection || !property) {
        return new Map();
    }
    return new Map(collection.map((item) => [item[property], item]));
};
/* Связанный список --------------------------------------------------------------------------------------------------------------------- */
// Класс создания ноды
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
// Класс создания связанного списка
class CreateLinkedList {
    constructor() {
        this.head = null;
    }
    // Создание нового узла в конце списка
    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    // вывод всех узлов в консоль
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    // Удаление узла из списка
    delete(value) {
        if (this.head && this.head.value === value) {
            this.head = this.head.next;
        }
        else {
            let current = this.head;
            while (current && current.next) {
                if (current.next.value === value) {
                    current.next = current.next.next;
                    return;
                }
                current = current.next;
            }
        }
    }
    // Поиск узла в списке
    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
}

exports.CreateLinkedList = CreateLinkedList;
exports.Node = Node;
exports.useBinarySearch = useBinarySearch;
exports.useFactorial = useFactorial;
exports.useHEXToRGB = useHEXToRGB;
exports.useHasClass = useHasClass;
exports.useHashMap = useHashMap;
exports.useInsertionSort = useInsertionSort;
exports.useMergeSort = useMergeSort;
exports.useNumberFormat = useNumberFormat;
exports.useQuickSort = useQuickSort;
exports.useRGBAToHEX = useRGBAToHEX;
exports.useRGBToHEX = useRGBToHEX;
exports.useTimSort = useTimSort;
exports.useUUID = useUUID;
