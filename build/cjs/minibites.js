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
const useBinarySearch = (collection, number) => {
    let low = 0;
    let high = collection.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (number === collection[mid]) {
            return mid;
        }
        if (number > collection[mid]) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
};
/* Форматирование в Hashing Map --------------------------------------------------------------------------------------------------------- */
const useHashingMap = (collection, property) => {
    // Проверяем наличие входных значений || []
    if (!collection || !property) {
        return new Map();
    }
    return new Map(collection.map((item) => [item[property], item]));
};
/*
// Поиск элемента
useHashingMap.get("string");

// Добавление элемента
useHashingMap.set("string", newItem);

// Удаление элемента
useHashingMap.delete("string");

// Проверка элемента
useHashingMap.has("string");

// Интерация по ключам
useHashingMap.keys();

// Интерация по значениям
useHashingMap.values();

// Вывести количество элементов
useHashingMap.size();

// Удаление всех элементов
useHashingMap.clear();
*/
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
exports.useHashingMap = useHashingMap;
exports.useNumberFormat = useNumberFormat;
exports.useRGBAToHEX = useRGBAToHEX;
exports.useRGBToHEX = useRGBToHEX;
exports.useUUID = useUUID;
