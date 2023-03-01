import { Group, SearchInput } from "./form-input.styles";

const FormInput = ({label, width, ...otherProps}) => {
    return (
        <Group width={width} >
            <label>{label}</label>
            <SearchInput className='search-input' {...otherProps}></SearchInput>
        </Group>
    )

}

export default FormInput;
