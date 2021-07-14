import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

type Props = {
    value: string,
    onChange: (value: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
    const note = props.value
    const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.value)
    };
    return (
        <Wrapper>
            <Input label="" type="text"
                   value={note} onChange={onChange} placeholder="请输入备注信息"
            />
        </Wrapper>
    );
};

const Wrapper = styled.section`
  background: white;
  font-size: 14px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export {NoteSection};