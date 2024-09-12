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

/* Создание UUID v4 --------------------------------------------------------------------------------------------------------------------- */

export const useUUID4 = (): string => crypto.randomUUID();

/* Форматирование HEX в RGB ------------------------------------------------------------------------------------------------------------- */

export const useHEXToRGB = (hex: string): string => {
  const bigint = parseInt(hex.substring(1), 16);
  const red = (bigint >> 16) & 255;
  const green = (bigint >> 8) & 255;
  const blue = bigint & 255;
  return `rgb(${red}, ${green}, ${blue})`;
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

/* Форматирование HSLA в RGBA ----------------------------------------------------------------------------------------------------------- */

export const useHSLAToRGBA = (hue: number, saturation: number, lightness: number, alpha: number): string => {
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

/* Сортировка Quick --------------------------------------------------------------------------------------------------------------------- */

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

/* Сортировка Insertion ----------------------------------------------------------------------------------------------------------------- */

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

/* Сортировка Merge --------------------------------------------------------------------------------------------------------------------- */

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

/* Сортировка Tim ----------------------------------------------------------------------------------------------------------------------- */

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

/* Сортировка Flash --------------------------------------------------------------------------------------------------------------------- */

export const useFlashSort = (collection: number[]) => {
  const n = collection.length;
  if (n <= 1) return collection;

  let min = Math.min(...collection);
  let max = Math.max(...collection);
  if (min === max) return collection;

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
    if (k < 0) break;
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

/* Проверка корректности ввода номера банковской карты (Алгоритм Луна) ------------------------------------------------------------------------- */

export const useCheckCreditCard = (number: number): boolean => {
  const num = String(number).replace(/\D/g, "");
  if (num === "") return false;

  let ch = 0;
  const isOdd = num.length % 2 !== 0;

  for (let i = 0; i < num.length; i++) {
    let n = parseInt(num[i], 10);
    if (isOdd ? i % 2 === 0 : i % 2 !== 0) n *= 2;
    if (n > 9) n -= 9;
    ch += n;
  }

  return ch % 10 === 0;
};

/* Проверка типа данных ----------------------------------------------------------------------------------------------------------------- */

export const useCheckType = (value: any) => {
  let regex = /^\[object (\S+?)\]$/;
  let matches = Object.prototype.toString.call(value).match(regex) || [];

  return (matches[1] || "undefined").toLowerCase();
};

/* Массив случайных чисел --------------------------------------------------------------------------------------------------------------- */

export const useRandomArray = (number: number) => {
  return Array.from({ length: number }, () => Math.floor(Math.random() * 2));
};
