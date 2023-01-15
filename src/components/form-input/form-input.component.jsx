import { Group, SearchInput } from "./form-input.styles";

const FormInput = ({label, ...otherProps}) => {
    return (
        <Group >
            <label>{label}</label>
            <SearchInput className='search-input' {...otherProps}></SearchInput>
        </Group>
    )

}

export default FormInput;
