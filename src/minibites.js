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
