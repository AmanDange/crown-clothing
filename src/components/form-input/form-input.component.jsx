import { FormInputLabel, Input, Group } from './form-input.styles';

const FormInput = ({ label, value, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} value={value} />
      {label && (
        <FormInputLabel $shrink={value && value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
