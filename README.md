# MiniBites

Библиотека содержит набор компонентов, полезных функций и помогает сократить время разработки.

## Установка

```bash
npm i minibites
```

## Содержание

- [Создание UUID v4](#Создание-UUID-v4)
- [Форматирование HEX в RGB](#Форматирование-HEX-в-RGB)
- [Форматирование RGB в HEX](#Форматирование-RGB-в-HEX)
- [Форматирование RGBA в HEX](#Форматирование-RGBA-в-HEX)
- [Проверка класса HTML элемента](#Проверка-класса-HTML-элемента)
- [Бинарный поиск](#Бинарный-поиск)
- [Форматирование в денежную единицу Российской Федерации](#Форматирование-в-денежную-единицу-Российской-Федерации)
- [Вычисление факториала](#Вычисление-факториала)
- [Сортировка Quick](#Сортировка-Quick)
- [Сортировка Tim](#Сортировка-Tim)
- [Форматирование массива в HashMap](#Форматирование-массива-в-HashMap)

### Создание UUID v4

```js
import { useUUID } from "minibites";

console.log(useUUID());
```

### Форматирование HEX в RGB

```js
import { useHEXToRGB } from "minibites";

console.log(useHEXToRGB("#ffffff"));
```

### Форматирование RGB в HEX

```js
import { useRGBToHEX } from "minibites";

console.log(useRGBToHEX(255, 255, 255));
```

### Форматирование RGBA в HEX

```js
import { useRGBAToHEX } from "minibites";

console.log(useRGBAToHEX(255, 255, 255, 0.5));
```

### Проверка класса HTML элемента

```js
import { useHasClass } from "minibites";

console.log(useHasClass(document.querySelector("#element"), "className"));
```

### Бинарный поиск

```js
import { useBinarySearch } from "minibites";

console.log(useBinarySearch([10, 25, 50, 100, 200], 50)); // Только отсортированные массивы
```

### Форматирование в денежную единицу Российской Федерации

```js
import { useNumberFormat } from "minibites";

console.log(useNumberFormat(5000, 2));
```

### Вычисление факториала

```js
import { useFactorial } from "minibites";

console.log(useFactorial(3));
```

### Сортировка Quick

```js
import { useQuickSort } from "minibites";

console.log(useQuickSort([60, 80, 30, 25, 5, 100]));
```

### Сортировка Tim

```js
import { useTimSort, useInsertionSort, useMergeSort } from "minibites";

console.log(useTimSort([60, 80, 30, 25, 5, 100]));
```

### Форматирование массива в HashMap

HashMap — это структура данных, которая позволяет хранить и быстро находить данные по уникальным ключам.

```js
import { useHashMap } from "minibites";

console.log(
  useHashMap(
    [
      { user: "User 1", age: 25 },
      { user: "User 2", age: 50 },
    ],
    "user"
  )
);

// Поиск элемента
useHashMap.get("String");

// Добавление элемента
useHashMap.set("String", newItem);

// Удаление элемента
useHashMap.delete("String");

// Проверка элемента
useHashMap.has("String");

// Интерация по ключам
useHashMap.keys();

// Интерация по значениям
useHashMap.values();

// Вывести количество элементов
useHashMap.size();

// Удаление всех элементов
useHashMap.clear();
```
