// Форматирование числа в денежную единицу Российской Федерации
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

// console.log(useNumFormat(3000, 2));
