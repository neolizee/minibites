/* Форматирование числа в денежную единицу Российской Федерации ------------------------------------------------------------------ */

export const useNumFormat = (number, maximumFractionDigits) => {
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
  const classNames = " " + element.className + " ";
  className = " " + className + " ";
  return classNames.replace(/[\r\n\t\f]+/g, " ").indexOf(className) > -1;
};

// Создание списка с уникальными значениями
export const useUniqueList = (arrayWithObject, property) => {
  if (!arrayWithObject || !property) {
    return [];
  }

  return (
    Array.from(
      new Set(arrayWithObject.map(({ [property]: key }) => key).filter(Boolean))
    ).sort() || []
  );
};

// Создание списка с уникальными значениями по населённым пунктам
export const useUniqueRegion = (arrayWithObject, property, isFirstItem) => {
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
