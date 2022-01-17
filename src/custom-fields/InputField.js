import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import styled from 'styled-components';
import { FormItemStyled } from 'assets/styles/GobalStyled';

InputField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    message: PropTypes.string,
    type: PropTypes.string,
};

InputField.defaultProps = {
    name: '',
    label: '',
    required: true,
    disabled: false,
    message: 'This field is required !',
    type: ''
};

function InputField(props) {

    const { name, label, required, message, type } = props;

    return (
        <FormItemStyled
            label={label}
            name={name}
            rules={[{ required, message }]}
        >
            <Input
                type={type}
                placeholder={label} />
        </FormItemStyled>
    );
}

export default InputField;