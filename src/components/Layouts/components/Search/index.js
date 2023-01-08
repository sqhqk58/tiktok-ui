import Tippy from '@tippyjs/react/headless'; // different import path!
import { faCircleXmark, faMagnifyingGlass,faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import { Fragment, useEffect, useState, useRef } from 'react';
import { wrapper as PopperWrapper} from '~/components/popper'
import styles from '~/components/Layouts/components/Search/Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles)
function Search() {
    const [searchText, setSearchText] = useState('')
    const [searchResult,setSearchResult] = useState([])
    const [showResults,setShowResults] = useState(false )
    const [loading,setLoading] = useState(false)
    const inputRef = useRef()
    const debouce = useDebounce(searchText,500)
    useEffect(()=>{
        if(!searchText.trim()){
            setSearchResult([])
            return;
        }
        setLoading(true)
       fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouce)}&type=less`)
       .then(res=>res.json())
       .then(res=>{
            setSearchResult(res.data)
            setLoading(false)
        })
    },[debouce])

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
                            {searchResult.map(result=>(
                                <AccountItem key={result.id} data={result}/>
                            ))}
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
                    {!!searchText&&!loading&&(
                        <button className={cx('clear')} onClick={()=>handleClear()}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading&&(<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />)}
                    
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>

                </div>
            </Tippy>
        </Fragment>
        
    );
}

export default Search;