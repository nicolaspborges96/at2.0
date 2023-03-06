import { Group, SearchInput, PrefixSpan, PrefixAndInputContainer } from "./form-input.styles";

const FormInput = ({ label, prefix, ...otherProps }) => {
    return (
        <Group >
            <label>{label}</label>
            <PrefixAndInputContainer>
            {prefix && <PrefixSpan> {prefix} </PrefixSpan>}
                <SearchInput
                    className="search-input"
                    { ...otherProps}
                ></SearchInput>
            </PrefixAndInputContainer>
                
            
        </Group>
    );
};

export default FormInput;
