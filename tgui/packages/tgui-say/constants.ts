/** Window sizes in pixels */
export enum WINDOW_SIZES {
  small = 30,
  medium = 50,
  large = 70,
  width = 231,
}

/** Line lengths for autoexpand */
export enum LINE_LENGTHS {
  small = 22,
  medium = 45,
}

/**
 * Radio prefixes.
 * Displays the name in the left button, tags a css class.
 */
export const RADIO_PREFIXES = {
  ':a ': 'Рой',
  ':b ': 'вв',
  ':c ': 'Ком',
  ':e ': 'Инж',
  ':g ': 'Ген',
  ':m ': 'Мед',
  ':n ': 'Иссл',
  ':o ': 'ИИ',
  ':p ': 'Раз',
  ':s ': 'Без',
  ':t ': 'Синд',
  ':u ': 'Снаб',
  ':v ': 'Обсл',
  ':y ': 'ЦК',
  // BANDASTATION ADDITION START
  '.a ': 'Рой',
  '.b ': 'вв',
  '.c ': 'Ком',
  '.e ': 'Инж',
  '.g ': 'Ген',
  '.m ': 'Мед',
  '.n ': 'Иссл',
  '.o ': 'ИИ',
  '.p ': 'Раз',
  '.s ': 'Без',
  '.t ': 'Синд',
  '.u ': 'Снаб',
  '.v ': 'Обсл',
  '.y ': 'ЦК',
  ':ф ': 'Рой',
  ':и ': 'вв',
  ':с ': 'Ком',
  ':у ': 'Инж',
  ':п ': 'Ген',
  ':ь ': 'Мед',
  ':т ': 'Науч',
  ':щ ': 'ИИ',
  ':ы ': 'СБ',
  ':е ': 'Синд',
  ':г ': 'Снаб',
  ':м ': 'Обсл',
  ':н ': 'ЦК',
  '.ф ': 'Рой',
  '.и ': 'вв',
  '.с ': 'Ком',
  '.у ': 'Инж',
  '.п ': 'Ген',
  '.ь ': 'Мед',
  '.т ': 'Иссл',
  '.щ ': 'ИИ',
  '.ы ': 'Без',
  '.е ': 'Синд',
  '.г ': 'Снаб',
  '.м ': 'Обсл',
  '.н ': 'ЦК',
  // BANDASTATION EDIT END
} as const;
