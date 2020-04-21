import {FILTER_NAMES, filters} from "../const";

const filtersCopy = Object.assign({}, filters);

const getCurrentFilterCount = (tasks) => {
  filtersCopy.all = tasks.length;
  tasks.forEach((task) => {
    if (task.isArchive) {
      filtersCopy.archive++;
      filtersCopy.all--;
    }
    if (task.isFavorite) {
      filtersCopy.favorites++;
    }
    if (task.dueDate < Date.now() && task.dueDate !== null) {
      filtersCopy.overdue++;
    } else if (task.dueDate === null) {
      filtersCopy.repeating++;
    } else if (task.dueDate.toDateString() === new Date(Date.now()).toDateString() && task.dueDate !== null) {
      filtersCopy.today++;
    }
  });
};

const generateFilters = (tasks) => {
  getCurrentFilterCount(tasks);
  return FILTER_NAMES.map((it) => {
    return {
      title: it,
      count: filtersCopy[it]
    };
  });
};

export {generateFilters};
