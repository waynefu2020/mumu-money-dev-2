import React, {useState} from 'react';
import {CategorySection} from './CategorySection';
import {useTags} from '../../hooks/useTags';
import {CategoryWrapper, defaultFormData} from '../Money';
import Icon from '../../components/Icon';
import styled from 'styled-components';


const Setting:React.FC= (props) =>{
    const {iconTags,deleteTag,addTag} = useTags()
    const [selected, setSelected] = useState(defaultFormData);
    type Selected = typeof selected;
    const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
    const selectedTagIds:number[] = [];
    const onChange = (obj: Partial<Selected>) => {
        setSelected({...selected, ...obj});
    };
    return (
        <div>
            <CategoryWrapper>
                <CategorySection value={selected.category}
                                 onChange={(category) => onChange({category})}
                />
            </CategoryWrapper>
            <ItemWrapper>
                <span className="addTag">
                    创建新的标签
                    <Icon name="right"/>
                </span>
                {iconTags.map(t=>
                    <li key={t.id} className={getClass(t.id)}>
                        <Icon name={t.svg}/>
                        <span>{t.name}</span>
                        <Icon name="delete" />
                    </li>
                )}
            </ItemWrapper>
        </div>

    )
}

const ItemWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  > .addTag{
    padding: 10px 0;
    margin: 0 16px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
  }
   > li{
     margin: 0 16px;
     border-bottom: 1px solid #f0f0f0;
     padding: 10px 0;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     > span{
        margin-right: auto;
        padding-left: 10px;
     }
     > svg{
       margin: 4px 0;
       width: 20px;
       height: 20px;
       fill: #434343;
     }
   }
`

export {Setting}