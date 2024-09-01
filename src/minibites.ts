/* Проверка класса HTML элемента ------------------------------------------------------------------------------------------------------- */

export const useHasClass = (element: HTMLElement | null, className: string): boolean => {
  // Проверяем наличие входных значений || false
  if (!element || !className) {
    return false;
  }

  const classNames = " " + element.className + " ";
  className = " " + className + " ";
  return classNames.replace(/[\r\n\t\f]+/g, " ").indexOf(className) > -1;
};

/* Форматирование в денежную единицу Российской Федерации ------------------------------------------------------------------------ */

export const useNumberFormat = (number: number, maximumFractionDigits: number = 0): string => {
  if (number != null) {
    return new Intl.NumberFormat("ru-RU", {
      maximumFractionDigits: maximumFractionDigits,
      style: "currency",
      currency: "RUB",
    }).format(number ?? 0);
  }
  return "";
};

/* Вычисление факториала ------------------------------------------------------------------------------------------------------------------------- - */

export const useFactorial = (number: number): number => (number <= 1 ? number : number * useFactorial(number - 1));

/* Создание UUID v4 ---------------------------------------------------------------------------------------------------------------- */

export const useUUID = (): string => crypto.randomUUID();

/* Форматирование HEX в RGB --------------------------------------------------------------------------------------------------------------------------- */

export const useHEXToRGB = (hex: string): { r: number; g: number; b: number } => {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};

/* Форматирование RGB в HEX --------------------------------------------------------------------------------------------------------------------------- */

export const useRGBToHEX = (r: number, g: number, b: number): string => {
  return "#"
    .concat(r.toString(16).padStart(2, "0"))
    .concat(g.toString(16).padStart(2, "0"))
    .concat(b.toString(16).padStart(2, "0"));
};

/* Форматирование RGBA в HEX --------------------------------------------------------------------------------------------------------------------------- */

export const useRGBAToHEX = (r: number, g: number, b: number, a: number): string => {
  return "#"
    .concat(r.toString(16).padStart(2, "0"))
    .concat(g.toString(16).padStart(2, "0"))
    .concat(b.toString(16).padStart(2, "0"))
    .concat(
      Math.round(a * 255)
        .toString(16)
        .padStart(2, "0")
    );
};

/* Бинарный поиск ---------------------------------------------------------------------------------------------------------------------- */

export const useBinarySearch = (collection: number[], number: number): number => {
  let low = 0;
  let high = collection.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (number === collection[mid]) {
      return mid;
    }
    if (number > collection[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

/* Форматирование в Hashing Map ------------------------------------------------------------------------------------------------- */

export const useHashingMap = (collection: any[], property: string) => {
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

/* Связанный список -------------------------------------------------------------------------------------------------------------------- */

// Класс создания ноды
export class Node {
  value: any;
  next: Node | null;

  constructor(value: any, next: Node | null = null) {
    this.value = value;
    this.next = next;
  }
}

// Класс создания связанного списка
export class CreateLinkedList {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  // Создание нового узла в конце списка
  add(value: any): void {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // вывод всех узлов в консоль
  print(): void {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // Удаление узла из списка
  delete(value: any): void {
    if (this.head && this.head.value === value) {
      this.head = this.head.next;
    } else {
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
  find(value: any): Node | null {
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
