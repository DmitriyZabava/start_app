// Тип для объекта модификаторов: ключ — имя класса, значение — булево или строка
// Если значение true/строка — класс будет добавлен
// Если false/пустая строка — класс не добавляется

type Mods = Record<string, boolean | string>;

// Функция для объединения CSS-классов
// cls — основной класс
// mods — объект с модификаторами (дополнительные классы по условию)
// additional — массив дополнительных классов
export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = []
): string {
    return [
        cls,
        ...additional.filter(Boolean), // Добавляем только непустые дополнительные классы
        Object.entries(mods) // eslint-disable-next-line
            .filter(([className, value]) => Boolean(value)) // eslint-disable-next-line
            .map(([className, value]) => className), // Берём имя класса
    ].join(" "); // Объединяем в одну строку через пробел
}
