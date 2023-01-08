import Tippy from '@tippyjs/react/headless'; // different import path!
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import { Fragment, useEffect, useState, useRef } from 'react';
import { wrapper as PopperWrapper} from '~/components/popper'
import styles from '~/components/Layouts/components/Search/Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles)
function Search() {
    const [searchText, setSearchText] = useState('')
    const [searchResult,setSearchResult] = useState([])
    const [showResults,setShowResults] = useState(false )
    const inputRef = useRef()
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([1,2,3])
        },0)
    },[])

    const handleHideResult  = ()=>{
        setShowResults(false)
    }
    const handleClear = ()=>{
        setSearchText('')
        setSearchResult([])
        inputRef.current.focus()
    }
    
    return (  
        <Fragment>
            {/* Search */}
            <Tippy
                interactive
                visible={showResults&&searchResult.length>0}
                render={attrs=>(
                    <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            <AccountItem/>
                        </PopperWrapper>
                        </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input 
                        onFocus={()=>setShowResults(true)}
                        ref={inputRef}
                        value={searchText}
                        placeholder='Search account and videos' 
                        spellCheck={false}
                        onChange={(e)=>setSearchText(e.target.value)}
                    />
                    {!!searchText&&(
                        <button className={cx('clear')} onClick={()=>handleClear()}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                    
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>

                </div>
            </Tippy>
        </Fragment>
        
    );
}

export default Search;