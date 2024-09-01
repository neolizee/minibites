# MiniBites

Библиотека содержит набор компонентов, полезных функций и поможет вам сократить время разработки.

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

### Создание UUID v4

```js
import { useUUID } from "minibites";

console.log(useUUID());

// 6309464c-77f8-4463-b325-eed2420ff52b
```

### Форматирование HEX в RGB

```js
import { useHEXToRGB } from "minibites";

console.log(useHEXToRGB("#ffffff"));

// { r: 255, g: 255, b: 255 }
```

### Форматирование RGB в HEX

```js
import { useRGBToHEX } from "minibites";

console.log(useRGBToHEX(255, 255, 255));

// #ffffff
```

### Форматирование RGBA в HEX

```js
import { useRGBAToHEX } from "minibites";

console.log(useRGBAToHEX(255, 255, 255, 0.5));

// #ffffff80
```

### Проверка класса HTML элемента

```js
import { useHasClass } from "minibites";

console.log(useHasClass(document.getElementById("element"), "className"));

// true
```

### Бинарный поиск

```js
import { useBinarySearch } from "minibites";

console.log(useBinarySearch([60, 30, 25, 70, 80], 25));

// Index 2
```

### Форматирование в денежную единицу Российской Федерации

```js
import { useNumberFormat } from "minibites";

console.log(useNumberFormat(5000, 2));

// 5 000,00 ₽
```

### Вычисление факториала

```js
import { useFactorial } from "minibites";

console.log(useFactorial(3));

// 6
```
