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

const getCurrentFilterCount = (tasks) => {
  filters.all = tasks.length;
  tasks.forEach((task) => {
    if (task.isArchive) {
      filters.archive++;
      filters.all--;
    }
    if (task.isFavorite) {
      filters.favorites++;
    }
    if (task.dueDate < Date.now() && task.dueDate !== null) {
      filters.overdue++;
    } else if (task.dueDate === null) {
      filters.repeating++;
    } else if (task.dueDate.setHours(0, 0, 0, 0) === new Date(Date.now()).setHours(0, 0, 0, 0) && task.dueDate !== null) {
      filters.today++;
    }
  });
};

const generateFilters = (tasks) => {
  getCurrentFilterCount(tasks);
  return FILTER_NAMES.map((it) => {
    return {
      title: it,
      count: filters[it]
    };
  });
};

export {generateFilters};
