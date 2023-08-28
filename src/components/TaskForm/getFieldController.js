import { InputControl, SelectControl, TextareaControl } from "./TaskFormControllers";

const getFieldController = (type) => {
    switch (type) {
        case 'input':
            return InputControl;
        case 'textarea':
            return TextareaControl;
        case 'select':
            return SelectControl;
        default:
            throw new Error(`Unsupported field type: ${type}`);
    }
}

export default getFieldController;
