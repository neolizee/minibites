/* Проверка класса HTML элемента -------------------------------------------------------------------------------------------------------- */

export const useHasClass = (element: HTMLElement | null, className: string): boolean => {
  // Проверяем наличие входных значений || false
  if (!element || !className) {
    return false;
  }

  const classNames = " " + element.className + " ";
  className = " " + className + " ";
  return classNames.replace(/[\r\n\t\f]+/g, " ").indexOf(className) > -1;
};

/* Форматирование в денежную единицу Российской Федерации ------------------------------------------------------------------------------- */

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

/* Вычисление факториала ---------------------------------------------------------------------------------------------------------------- */

export const useFactorial = (number: number): number => (number <= 1 ? number : number * useFactorial(number - 1));

/* Создание UUID v4 --------------------------------------------------------------------------------------------------------------------- */

export const useUUID = (): string => crypto.randomUUID();

/* Форматирование HEX в RGB ------------------------------------------------------------------------------------------------------------- */

export const useHEXToRGB = (hex: string): { r: number; g: number; b: number } => {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};

/* Форматирование RGB в HEX ------------------------------------------------------------------------------------------------------------- */

export const useRGBToHEX = (r: number, g: number, b: number): string => {
  return "#"
    .concat(r.toString(16).padStart(2, "0"))
    .concat(g.toString(16).padStart(2, "0"))
    .concat(b.toString(16).padStart(2, "0"));
};

/* Форматирование RGBA в HEX ------------------------------------------------------------------------------------------------------------ */

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

/* Бинарный поиск ----------------------------------------------------------------------------------------------------------------------- */

export const useBinarySearch = (collection: number[], target: number): number => {
  let low = 0;
  let high = collection.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (target === collection[mid]) {
      return mid;
    }
    if (target > collection[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

/* Сортировка Quick ----------------------------------------------------------------------------------------------------------------- */

export const useQuickSort = (collection: number[]): number[] => {
  if (collection.length <= 1) return collection;
  const target = collection[Math.floor(collection.length / 2)];
  const low = [];
  const high = [];
  for (let i = 0; i < collection.length; i++) {
    if (i === Math.floor(collection.length / 2)) continue;
    if (collection[i] < target) {
      low.push(collection[i]);
    } else {
      high.push(collection[i]);
    }
  }
  return [...useQuickSort(low), target, ...useQuickSort(high)];
};

/* Сортировка Insertion ------------------------------------------------------------------------------------------------------------------- */

export const useInsertionSort = (collection: number[], low: number, high: number) => {
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

export const useMergeSort = (collection: number[], low: number, mid: number, high: number) => {
  let left = collection.slice(low, mid + 1);
  let right = collection.slice(mid + 1, high + 1);

  let i = 0,
    j = 0,
    k = low;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      collection[k] = left[i];
      i++;
    } else {
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

export const useTimSort = (collection: number[]): number[] => {
  const start = 32;
  for (let i = 0; i < collection.length; i += start)
    useInsertionSort(collection, i, Math.min(i + 31, collection.length - 1));

  for (let size = start; size < collection.length; size = 2 * size) {
    for (let low = 0; low < collection.length; low += 2 * size) {
      let mid = low + size - 1;
      let high = Math.min(low + 2 * size - 1, collection.length - 1);
      if (mid < high) useMergeSort(collection, low, mid, high);
    }
  }

  return collection;
};

/* Форматирование в HashMap --------------------------------------------------------------------------------------------------------- */

export const useHashMap = (collection: any[], property: string) => {
  // Проверяем наличие входных значений || []
  if (!collection || !property) {
    return new Map();
  }

  return new Map(collection.map((item) => [item[property], item]));
};

/* Связанный список --------------------------------------------------------------------------------------------------------------------- */

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
