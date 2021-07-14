import React from 'react';
import {useTags} from '../hooks/useTags';
import {useParams, useHistory} from 'react-router-dom';
import Layout from './Layout';
import Icon from './Icon';
import {Button} from './Button';
import styled from 'styled-components';
import {Input} from './Input';
import {Center} from './Center';
import {Space} from './Space';

type Params = {
    id: string
}

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;

const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 16px;
`;

const Tag: React.FC = (props) => {
    const {findTag, updateTag, deleteTag} = useTags();
    let {id: idString} = useParams<Params>();
    const tag = findTag(parseInt(idString));
    const history = useHistory()
    const onClickBack = ()=>{
        history.goBack()
    }
    const tagContent = (tag: { id: number, name: string }) => (
        <div>
            <InputWrapper>
                <Input label="标签名" type="text"
                       placeholder="填写标签名" value={tag.name}
                       onChange={(e) => {
                           updateTag(tag.id, {name: e.target.value});
                       }}
                />
            </InputWrapper>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
            </Center>
        </div>
    );
    return (
        <Layout>
            <TopBar>
                <Icon name="left" onClick={onClickBack}/>
                <span>编辑标签</span>
                <Icon/>
            </TopBar>
            {tag ? tagContent(tag) : <Center>tag不存在</Center>}
        </Layout>
    );

}
;

export {Tag};