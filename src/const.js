const START_SHOWING_DATE = 8;
const END_SHOWING_DATE = 10;

const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

const DAYS = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];

const MONTH_NAMES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

const FILTER_NAMES = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const filters = {
  all: 0,
  overdue: 0,
  today: 0,
  favorites: 0,
  repeating: 0,
  archive: 0
};

export {COLORS, DAYS, MONTH_NAMES, FILTER_NAMES, START_SHOWING_DATE, END_SHOWING_DATE, filters};
