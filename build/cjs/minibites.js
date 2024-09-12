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
/* Создание UUID v4 --------------------------------------------------------------------------------------------------------------------- */
const useUUID4 = () => crypto.randomUUID();
/* Форматирование HEX в RGB ------------------------------------------------------------------------------------------------------------- */
const useHEXToRGB = (hex) => {
    const bigint = parseInt(hex.substring(1), 16);
    const red = (bigint >> 16) & 255;
    const green = (bigint >> 8) & 255;
    const blue = bigint & 255;
    return `rgb(${red}, ${green}, ${blue})`;
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
/* Форматирование HSLA в RGBA ----------------------------------------------------------------------------------------------------------- */
const useHSLAToRGBA = (hue, saturation, lightness, alpha) => {
    saturation /= 100;
    lightness /= 100;
    const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
    const intermediate = chroma * (1 - Math.abs(((hue / 60) % 2) - 1));
    const adjust = lightness - chroma / 2;
    let [red, green, blue] = [0, 0, 0];
    switch (true) {
        case hue < 60:
            [red, green, blue] = [chroma, intermediate, 0];
            break;
        case hue < 120:
            [red, green, blue] = [intermediate, chroma, 0];
            break;
        case hue < 180:
            [red, green, blue] = [0, chroma, intermediate];
            break;
        case hue < 240:
            [red, green, blue] = [0, intermediate, chroma];
            break;
        case hue < 300:
            [red, green, blue] = [intermediate, 0, chroma];
            break;
        default:
            [red, green, blue] = [chroma, 0, intermediate];
            break;
    }
    red = Math.round((red + adjust) * 255);
    green = Math.round((green + adjust) * 255);
    blue = Math.round((blue + adjust) * 255);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
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
/* Сортировка Quick --------------------------------------------------------------------------------------------------------------------- */
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
/* Сортировка Insertion ----------------------------------------------------------------------------------------------------------------- */
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
/* Сортировка Merge --------------------------------------------------------------------------------------------------------------------- */
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
/* Сортировка Tim ----------------------------------------------------------------------------------------------------------------------- */
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
/* Сортировка Flash --------------------------------------------------------------------------------------------------------------------- */
const useFlashSort = (collection) => {
    const n = collection.length;
    if (n <= 1)
        return collection;
    let min = Math.min(...collection);
    let max = Math.max(...collection);
    if (min === max)
        return collection;
    const m = Math.floor(0.45 * n);
    const l = new Array(m).fill(0);
    const c1 = (m - 1) / (max - min);
    collection.forEach((num) => {
        const k = Math.floor(c1 * (num - min));
        l[k]++;
    });
    for (let p = 1; p < m; ++p) {
        l[p] += l[p - 1];
    }
    let hold = collection[0];
    collection[0] = collection[collection.indexOf(max)];
    collection[collection.indexOf(max)] = hold;
    let move = 0;
    let j = 0;
    let k = m - 1;
    while (move < n - 1) {
        while (j > l[k] - 1) {
            ++j;
            k = Math.floor(c1 * (collection[j] - min));
        }
        if (k < 0)
            break;
        let flash = collection[j];
        while (j !== l[k]) {
            k = Math.floor(c1 * (flash - min));
            hold = collection[--l[k]];
            collection[l[k]] = flash;
            flash = hold;
            ++move;
        }
    }
    for (j = 1; j < n; j++) {
        hold = collection[j];
        let i = j - 1;
        while (i >= 0 && collection[i] > hold) {
            collection[i + 1] = collection[i];
            i--;
        }
        collection[i + 1] = hold;
    }
    return collection;
};
/* Форматирование в HashMap ------------------------------------------------------------------------------------------------------------- */
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
/* Проверка корректности ввода номера банковской карты (Алгоритм Луна) ------------------------------------------------------------------------- */
const useCheckCreditCard = (number) => {
    const num = String(number).replace(/\D/g, "");
    if (num === "")
        return false;
    let ch = 0;
    const isOdd = num.length % 2 !== 0;
    for (let i = 0; i < num.length; i++) {
        let n = parseInt(num[i], 10);
        if (isOdd ? i % 2 === 0 : i % 2 !== 0)
            n *= 2;
        if (n > 9)
            n -= 9;
        ch += n;
    }
    return ch % 10 === 0;
};
/* Проверка типа данных ----------------------------------------------------------------------------------------------------------------- */
const useCheckType = (value) => {
    let regex = /^\[object (\S+?)\]$/;
    let matches = Object.prototype.toString.call(value).match(regex) || [];
    return (matches[1] || "undefined").toLowerCase();
};
/* Массив случайных чисел --------------------------------------------------------------------------------------------------------------- */
const useRandomArray = (number) => {
    return Array.from({ length: number }, () => Math.floor(Math.random() * 2));
};

exports.CreateLinkedList = CreateLinkedList;
exports.Node = Node;
exports.useBinarySearch = useBinarySearch;
exports.useCheckCreditCard = useCheckCreditCard;
exports.useCheckType = useCheckType;
exports.useFlashSort = useFlashSort;
exports.useHEXToRGB = useHEXToRGB;
exports.useHSLAToRGBA = useHSLAToRGBA;
exports.useHasClass = useHasClass;
exports.useHashMap = useHashMap;
exports.useInsertionSort = useInsertionSort;
exports.useMergeSort = useMergeSort;
exports.useNumberFormat = useNumberFormat;
exports.useQuickSort = useQuickSort;
exports.useRGBAToHEX = useRGBAToHEX;
exports.useRGBToHEX = useRGBToHEX;
exports.useRandomArray = useRandomArray;
exports.useTimSort = useTimSort;
exports.useUUID4 = useUUID4;
