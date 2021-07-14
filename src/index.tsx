import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import App from './App';
import "antd/dist/antd.css";
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

ReactDOM.render(<App/>,
  document.getElementById('root')
);