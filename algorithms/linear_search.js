/**
 * Линейный поиск (классический) (реализация).
 * Последовательный перебор всех элементов массива пока:
 * 1 искомый элемент найден - возвращаем найденный элемент (или его индекс)
 * 2 достигнут конец массива.
 * @param {array} dataSet массив произвольных значений
 * @param {any} value искомое значение
 *
 */
function linearSearch(dataSet, value) {
    for (let i = 0; i < dataSet.length; i++) {
        if (dataSet[i] === value) {
            return value;
        }
    }

    return -1;
}

const array = [1, 2, 3, null, 'a', 'str', 3];
const elem = linearSearch(array, null);
console.dir(elem);
