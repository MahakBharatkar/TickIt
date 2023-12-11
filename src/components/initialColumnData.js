import { v4 as uuidv4 } from "uuid";

export const initialColumns = {
    [uuidv4()]: {
      title: 'To-do',
      items: [],
    },
    [uuidv4()]: {
      title: 'In Progress',
      items: [],
    },
    [uuidv4()]: {
      title: 'Done',
      items: [],
    },
  };