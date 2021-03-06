import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../hooks/useTags';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {Center} from '../components/Center';

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  >li{
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    > a{
      display: flex;
      padding: 12px 16px 12px 0;
      justify-content: space-between;
      align-items: center;
    }
  }
`

const Space = styled.div`
  height: 16px;
`

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 16px;
  background: #ef8871;
  color: white;
  border-radius: 4px;
`

function Tags() {
    const {tags,addTag} = useTags();
    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                <li key={tag.id}>
                    <Link to={'/tags/'+tag.id}>
                    <span className="oneLine">{tag.name}</span>
                    <Icon name="right"/>
                    </Link>
                </li>
            )}
            </TagList>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button onClick={addTag}>新增标签</Button>
            </Center>
        </Layout>
    );
}

export default Tags;