import { useForm } from "react-hook-form";
import controls from "./controls";
import getFieldController from "./getFieldController";
import styles from "./styles.module.css";

const TaskForm = ({
  onSubmit,
  initialData = {},
  cancelFunction = () => {},
}) => {
  let isEdit = false;
  if (initialData.id) {
    isEdit = true;
  }

  const formDefaultValues = isEdit
    ? initialData
    : {
        title: "",
        description: "",
        priority: "Medium",
      };

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: formDefaultValues,
  });

  const onFormSubmit = (data) => {
    onSubmit(data);
    reset();
    cancelFunction();
  };

  return (
    <div className={styles.form_container}>
      <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
        <div className={styles.controls_container}>
          {controls.map((controlItem) => {
            const Element = getFieldController(controlItem.type);

            if (!Element) return null;

            return (
              <div
                key={controlItem.name}
                className={controlItem.className || ""}
              >
                <span className={styles.label}>{controlItem.label}</span>
                <div className={styles.input_group}>
                  <Element
                    {...controlItem}
                    control={control}
                    rules={controlItem.rules}
                  />
                  <div className={styles.error_message}>
                    {errors[controlItem.name]?.message}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.button_container}>
          <button
            className={styles.cancel_button}
            type="button"
            onClick={() => cancelFunction(false)}
          >
            Cancel
          </button>
          <button className={styles.add_button} type="submit">
            {isEdit ? "Edit" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
