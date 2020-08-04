import React from 'react';
import styled, { css } from 'styled-components';
import Proptypes from 'prop-types';

const FormFieldWrapper = styled.div`
position: relative;
textarea{
  min-height: 150px;
};

input[type="color"]{
  padding-left: 56px;
}

`;
const Label = styled.label`
`;
Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .3s ease-in-out;
`;

const Input = styled.input`
background: #53585d;
color: #f5f5f5;
display: block;
width:100%;
height: 57px;
font-size: 18px;

outline: 0;
border: 0;
border-top: 4px solid transparent;
border-bottom: 4px solid #53585d;


padding: 16px 16px;
margin-bottom: 45px;
resize: none;
border-radius: 4px;
transition: border-color .3s;

&:focus{
  border-bottom-color: var(--primary)
}

&:focus:not([type="color"]) + span {
transform: scale(.6) translateY(-10px);
}
${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}
FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.prototype = {
  label: Proptypes.string.isRequired,
  type: Proptypes.string,
  name: Proptypes.string.isRequired,
  value: Proptypes.string,
  onChange: Proptypes.func,
};

export default FormField;