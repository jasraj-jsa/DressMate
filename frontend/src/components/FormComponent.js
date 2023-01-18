import { Flex, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

const FormComponent = ({ label, type, helperText, key, values, setValue }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <FormControl textColor="white">
        <FormLabel>{label}</FormLabel>
        <Input
          type={type}
          value={values[key]}
          onChange={(evt) => {
            setValue(key, evt.target.value);
          }}
        />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Flex>
  );
};

export default FormComponent;
