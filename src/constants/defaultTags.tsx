import {createId} from '../lib/createId';

const defaultTags = [
    {id: createId(), name: '饮食', svg: 'food', type: 'expense'},
    {id: createId(), name: '学习', svg: 'study', type: 'expense'},
    {id: createId(), name: '社交', svg: 'social', type: 'expense'},
    {id: createId(), name: '通讯', svg: 'tele', type: 'expense'},
    {id: createId(), name: '工资', svg: 'salary', type: 'income'},
    {id: createId(), name: '奖金', svg: 'bonus', type: 'income'},
    {id: createId(), name: '理财', svg: 'finical', type: 'income'},
];

export {defaultTags}