import React from 'react';
import PropTypes from 'prop-types';
import { FormItemStyled } from 'assets/images/styles/GobalStyled';
import { message as messageNotif, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons/lib/icons';
import { FormStore } from 'rc-field-form/es/useForm';

import { MdCloudUpload } from "react-icons/md"

UploadField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    message: PropTypes.string,
    type: PropTypes.string,
    accept: PropTypes.array,
    maxCount: PropTypes.number,
};

UploadField.defaultProps = {
    name: '',
    label: '',
    required: true,
    disabled: false,
    message: 'This field is required !',
    listType: '',
    accept: ["multiple"],
    maxCount: 1
};

function UploadField(props) {
    const { name, label, required, message, disabled, listType, accept, maxCount } = props;

    const handleBeforeUpload = (file) => {
        if (accept.includes('multiple') || accept.includes(file.type)) {
            return false;
        }

        messageNotif.error(`Chỉ chấp nhận file [${accept.join(" , ")}]`);
        return true;
    }

    return (
        <FormItemStyled
            label={label}
            name={name}
            rules={[{ required, message }]}
            disabled={disabled}
        >
            <Upload
                beforeUpload={handleBeforeUpload}
                maxCount={maxCount}
                accept={accept}
                listType={listType}>

                <Button
                    border={false}
                    icon={<MdCloudUpload />}
                    size='large' />
            </Upload>
        </FormItemStyled>
    );
}

export default UploadField;