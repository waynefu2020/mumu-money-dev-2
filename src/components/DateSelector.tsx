import {ConfigProvider,DatePicker} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

const DateSelector = ()=>{
    return (
        <ConfigProvider locale={zhCN}>
            <div className="date">
                <DatePicker/>
            </div>
        </ConfigProvider>
    )
}

export {DateSelector}