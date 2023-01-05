import MenuItem from './MenuItems';
import Tippy from '@tippyjs/react/headless'; // different import path!
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import {wrapper as PopperWrapper} from '~/components/popper'
const cx = classNames.bind(styles)
function Menu({children, items=[]}) {
    const renderItems = ()=>{
        return items.map((item,index)=>(
            <MenuItem key={index} data={item} />
        ))
    }
    return (  
        <Tippy
                delay={[0,500]}
                interactive
                placement='bottom-end'
                render={attrs=>(
                    <div className={cx('content')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
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