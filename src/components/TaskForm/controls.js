const controls = [
  {
    type: "input",
    label: "Title",
    name: "title",
    placeholder: "Enter task title",
    rules: {
      required: "Title is required",
      pattern: {
        value: /^(?=.*\S)[a-zA-Z0-9 _-]{3,50}$/,
        message: "Invalid title",
      },
    },
  },
  {
    type: "textarea",
    label: "Description",
    name: "description",
    placeholder: "Enter task description",
  },
  {
    type: "select",
    label: "Priority",
    name: "priority",
    options: [
      { label: "Low", value: "Low" },
      { label: "Medium", value: "Medium" },
      { label: "High", value: "High" },
    ],
  },
  {
    type: "select",
    label: "Column",
    name: "column",
    options: [
      { label: "To do", value: "column1" },
      { label: "In progress", value: "column2" },
      { label: "Done", value: "column3" },
    ],
  },
];

export default controls;
