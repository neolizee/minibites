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
- [Форматирование HSLA в RGBA](#Форматирование-HSLA-в-RGBA)
- [Проверка класса HTML элемента](#Проверка-класса-HTML-элемента)
- [Проверка типа данных](#Проверка-типа-данных)
- [Проверка корректности ввода номера банковской карты (Алгоритм Луна)](<#Проверка-корректности-ввода-номера-банковской-карты-(Алгоритм-Луна)>)
- [Бинарный поиск](#Бинарный-поиск)
- [Точный поиск подстроки в строке, алгоритм Бойера - Мура](#Точный-поиск-подстроки-в-строке,-алгоритм-Бойера---Мура)
- [Форматирование в денежную единицу Российской Федерации](#Форматирование-в-денежную-единицу-Российской-Федерации)
- [Сортировка Quick](#Сортировка-Quick)
- [Сортировка Tim](#Сортировка-Tim)
- [Сортировка Flash](#Сортировка-Flash)
- [Форматирование массива в HashMap](#Форматирование-массива-в-HashMap)
- [Генерация массива с разными типами данных](https://github.com/neolizee/lib-random-array "Генерация массива с разными типами данных")

### Создание UUID v4

```js
import { useUUID4 } from "minibites";

console.log(useUUID4());
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

### Форматирование HSLA в RGBA

```js
import { useHSLAToRGBA } from "minibites";

console.log(useHSLAToRGBA(100, 50, 50, 0.5));
```

### Проверка класса HTML элемента

```js
import { useHasClass } from "minibites";

console.log(useHasClass(document.querySelector("#element"), "className"));
```

### Проверка типа данных

```js
import { useCheckType } from "minibites";

console.log(useCheckType({}));
```

### Проверка корректности ввода номера банковской карты (Алгоритм Луна)

```js
import { useCheckCreditCard } from "minibites";

console.log(useCheckCreditCard(1234567812345670));
```

### Бинарный поиск

```js
import { useBinarySearch } from "minibites";

console.log(useBinarySearch([10, 25, 50, 100, 200], 50)); // Только отсортированные массивы
```

### Точный поиск подстроки в строке, алгоритм Бойера - Мура

```js
import { useBMSearch } from "minibites";

console.log(useBMSearch("ABAAABCDABABCDABCDABCA", "ABCD"));
```

### Форматирование в денежную единицу Российской Федерации

```js
import { useNumberFormat } from "minibites";

console.log(useNumberFormat(5000, 2));
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

### Сортировка Flash

```js
import { useFlashSort } from "minibites";

console.log(useFlashSort([60, 80, 30, 25, 5, 100]));
```

### Форматирование массива в HashMap

HashMap - это структура данных, которая позволяет хранить и быстро находить данные по уникальным ключам.

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
```

Поиск элемента

```js
useHashMap.get("String");
```

Добавление элемента

```js
useHashMap.set("String", newItem);
```

Удаление элемента

```js
useHashMap.delete("String");
```

Проверка элемента

```js
useHashMap.has("String");
```

Интерация по ключам

```js
useHashMap.keys();
```

Интерация по значениям

```js
useHashMap.values();
```

Вывести количество элементов

```js
useHashMap.size();
```

Удаление всех элементов

```js
useHashMap.clear();
```
