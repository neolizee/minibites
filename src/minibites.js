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

/* Преобразование данных в Hashing Map ------------------------------------------------------------------------------------------------------------------------ */

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
