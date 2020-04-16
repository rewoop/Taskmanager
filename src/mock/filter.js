const FILTER_NAMES = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const SHOWING_DATE = 10;

const filters = {
  all: 0,
  overdue: 0,
  today: 0,
  favorites: 0,
  repeating: 0,
  archive: 0
};

const filterCopy = Object.assign({}, filters);

const getCurrentFilterCount = (tasks) => {
  filterCopy.all = tasks.length;
  tasks.forEach((task) => {
    if (task.isArchive) {
      filterCopy.archive++;
      filterCopy.all--;
    }
    if (task.isFavorite) {
      filterCopy.favorites++;
    }
    if (task.dueDate < Date.now() && task.dueDate !== null) {
      filterCopy.overdue++;
    } else if (task.dueDate === null) {
      filterCopy.repeating++;
    } else if (task.dueDate.toISOString().slice(0, SHOWING_DATE) === new Date(Date.now()).toISOString().slice(0, SHOWING_DATE) && task.dueDate !== null) {
      filterCopy.today++;
    }
  });
};

const generateFilters = (tasks) => {
  getCurrentFilterCount(tasks);
  return FILTER_NAMES.map((it) => {
    return {
      title: it,
      count: filterCopy[it]
    };
  });
};

export {generateFilters};
