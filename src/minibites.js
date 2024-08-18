/* Форматирование числа в денежную единицу Российской Федерации ------------------------------------------------------------------ */

export const useNumberFormat = (number, maximumFractionDigits) => {
  if (number != null) {
    return new Intl.NumberFormat("ru-RU", {
      maximumFractionDigits: maximumFractionDigits ?? 0,
      style: "currency",
      currency: "RUB",
    }).format(number ?? 0);
  }
  return "";
};

/* Проверка класса HTML элемента -------------------------------------------------------------------------------------------------- */

export const useHasClass = (element, className) => {
  // Проверяем наличие входных значений || false
  if (!element || !className) {
    return false;
  }

  const classNames = " " + element.className + " ";
  className = " " + className + " ";
  return classNames.replace(/[\r\n\t\f]+/g, " ").indexOf(className) > -1;
};

/* Создание списка с уникальными значениями --------------------------------------------------------------------------------------- */

export const useUniqueList = (arrayWithObject, property) => {
  // Проверяем наличие входных значений || []
  if (!arrayWithObject || !property) {
    return [];
  }

  return (
    Array.from(
      new Set(arrayWithObject.map(({ [property]: key }) => key).filter(Boolean))
    ).sort() || []
  );
};

/* Создание списка с уникальными значениями по населённым пунктам ----------------------------------------------------------------- */

export const useUniqueRegion = (arrayWithObject, property, isFirstItem) => {
  // Проверяем наличие входных значений || []
  if (!arrayWithObject || !property) {
    return [];
  }

  return Array.from(
    new Set(
      arrayWithObject
        .flatMap(({ [property]: key }) => key?.split(/\s*[,]\s*/g) || [])
        .filter(Boolean)
    )
  ).sort((a, b) =>
    a === isFirstItem ? -1 : b === isFirstItem ? 1 : a.localeCompare(b)
  );
};

/* Преобразование данных в Hashing Map -------------------------------------------------------------------------------------------- */

const useHashingMap = (data, property) => {
  // Проверяем наличие входных значений || []
  if (!data || !property) {
    return [];
  }

  return new Map(data.map(({ [property]: key }) => [key, element]));
};
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

/* Связанный список --------------------------------------------------------------------------------------------------------------- */

// Класс создания ноды
export class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Класс создания связанного списка
export class LinkedList {
  constructor() {
    this.head = null;
  }

  // Создание нового узла в конце списка
  add(value) {
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

  // Вывод в консоль всех узлов
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

  // Поиск узла в списке и вывод в консоль
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

/* const newList = new LinkedList();
newList.add(10);
newList.add(20);
newList.add(30);
newList.print();
console.log(newList.find(30)); */

/* Факториал ---------------------------------------------------------------------------------------------------------------------- */

export const factorial = (value) =>
  value <= 1 ? value : value * factorial(value - 1);

/* Формирование UUID v4 ----------------------------------------------------------------------------------------------------------- */

export const uuid = () =>
  ([1e7] + -1e3 + -1e3 + -1e3 + -1e11).replace(/[01]/g, () =>
    (crypto.getRandomValues(new Uint8Array(1))[0] & 15).toString(16)
  );
