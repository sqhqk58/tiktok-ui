import MenuItem from './MenuItems';
import Tippy from '@tippyjs/react/headless'; // different import path!
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import {wrapper as PopperWrapper} from '~/components/popper'
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles)
const defaultFn = ()=>{}
function Menu({children, items=[], onChange={defaultFn}}) {
    const [history,setHistory] = useState([{ data: items}])
    const currentItem =  history[history.length - 1];
    const renderItems = ()=>{
        return currentItem.data.map((item,index)=>{
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={()=>{
                if(isParent){
                    setHistory(prev=>[...prev,item.children])
                }
                else{
                    onChange(item)
                }
            }}/>
        })
    }
    return (  
        <Tippy
                delay={[0,500]}
                interactive
                placement='bottom-end'
                render={attrs=>(
                    <div className={cx('content')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {history.length>1 && <Header title='Languages' onBack={()=>{
                                setHistory(prev=>prev.splice(0, prev.length-1))
                            }}/>}
                            {renderItems()}
                        </PopperWrapper>
                        </div>
                )}
                >
                {children}
            </Tippy>

    );
}

export default Menu;