import Layout from '../components/Layout';
import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {useRecords} from '../hooks/useRecords';
import {DateSelector} from '../components/DateSelector';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

export const CategoryWrapper = styled.div`
  background: white;
`
const NoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #f8f9fb;
`

type Category = '-' | '+';

export const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
}


function Money() {
    const [selected, setSelected] = useState(defaultFormData);
    type Selected = typeof selected;
    const {addRecord} = useRecords()

    const onChange = (obj: Partial<Selected>) => {
        setSelected({...selected, ...obj});
    };
    const submit = ()=>{
        if(addRecord(selected)){
            alert('保存成功！')
            setSelected(defaultFormData)
        }
    }
    return (
        <MyLayout scrollTop={9999}>
            <CategoryWrapper>
                <CategorySection value={selected.category}
                                 onChange={(category) => onChange({category})}
                />
            </CategoryWrapper>
            <TagsSection value={selected.tagIds}
                         onChange={(tagIds) => onChange({tagIds})}/>
            <NoteWrapper>
                <NoteSection value={selected.note}
                             onChange={(note) => onChange({note})}
                />
                <DateSelector/>
            </NoteWrapper>
            <NumberPadSection value={selected.amount}
                              onChange={(amount) => onChange({amount})}
                              onOk={submit}
            />
        </MyLayout>
    );
}

export default Money;