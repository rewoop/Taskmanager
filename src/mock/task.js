import {COLORS} from "../const.js";

const LAST_DAY_IN_WEEK = 8;
const HALF_OF_RANDOM = 0.5;

const DESCRIPTION_ITEMS = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
];

const WeekDay = {
  MO: `mo`,
  TU: `tu`,
  WE: `we`,
  TH: `th`,
  FR: `fr`,
  SA: `sa`,
  SU: `su`
};

// const WEEK_DAYS = [[WeekDay.MO], [WeekDay.TU], [WeekDay.WE], [WeekDay.TH], [WeekDay.FR], [WeekDay.SA], [WeekDay.SU]];

const DEFAULT_REPEATING_DAYS = Object.freeze({
  [WeekDay.MO]: false,
  [WeekDay.TU]: false,
  [WeekDay.WE]: false,
  [WeekDay.TH]: false,
  [WeekDay.FR]: false,
  [WeekDay.SA]: false,
  [WeekDay.SU]: false,
});

const getBoolean = () => Math.random() > HALF_OF_RANDOM;

const getRandomItem = (items) => {
  const randomIndex = getRandomIntegerNumber(0, items.length);

  return items[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = getBoolean() ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, LAST_DAY_IN_WEEK);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const generateRepeatingDays = () => {
  return Object.assign({}, DEFAULT_REPEATING_DAYS, {
    [WeekDay.MO]: getBoolean(),
  });
};

const generateTask = () => {
  const dueDate = getBoolean() ? null : getRandomDate();

  return {
    description: getRandomItem(DESCRIPTION_ITEMS),
    dueDate,
    repeatingDays: dueDate ? DEFAULT_REPEATING_DAYS : generateRepeatingDays(),
    color: getRandomItem(COLORS),
    isArchive: getBoolean(),
    isFavorite: getBoolean(),
  };
};

const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask);
};

export {generateTasks};
