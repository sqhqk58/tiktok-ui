import Tippy from '@tippyjs/react/headless'; // different import path!
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import { useEffect, useState } from 'react';
import { wrapper as PopperWrapper} from '~/components/popper'
import styles from '~/components/Layouts/components/Search/Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles)
function Search() {
    const [searchResult,setSearchResult] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([])
        },0)
    })
    return (  
        {/* Search */}
        <Tippy
            interactive
            visible={searchResult.length>0}
            render={attrs=>(
                <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        <AccountItem/>
                        <AccountItem/>
                        <AccountItem/>
                        <AccountItem/>
                    </PopperWrapper>
                    </div>
            )}
        >
            <div className={cx('search')}>
                <input 
                    placeholder='Search account and videos' 
                    spellCheck={false}
                />
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>

            </div>
        </Tippy>
    );
}

export default Search;