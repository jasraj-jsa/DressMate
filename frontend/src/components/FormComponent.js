import { Flex, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

const FormComponent = ({ label, type, helperText, key, value, setValue }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <FormControl textColor="white">
        <FormLabel>{label}</FormLabel>
        <Input
          type={type}
          value={value}
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
