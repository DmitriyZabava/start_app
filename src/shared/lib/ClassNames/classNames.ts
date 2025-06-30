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
    const modsClasses = Object.entries(mods) // eslint-disable-next-line
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className)
        .filter(Boolean)
        .join(" ");
    return [
        cls,
        ...additional.filter(Boolean), // Добавляем только непустые дополнительные классы
        modsClasses
    ].filter(part => part !== "")
        .join(" ").trim(); // Объединяем в одну строку через пробел
}
