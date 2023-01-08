import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faCloudArrowUp, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faMoneyBill, faPeopleArrows, faPersonRifle, faSignOut, faSpinner, faTools, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!
import Tipppy from '@tippyjs/react'; // different import path!
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';
import { wrapper as PopperWrapper} from '~/components/popper'
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/popper/Menu';
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'Vietnamese',
        children: 
        {
            title: 'languages',
            data: 
            [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and help',
        to: 'feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard Shortcuts'
    },
]
const cx = classNames.bind(styles)
function Header() {
    const [searchResult,setSearchResult] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([])
        },0)
    })
    const handleMenuOnChange = (menuItem)=>{
        switch(menuItem.type){
            case 'language':
                console.log('handleLanguageChange')
        }
    }
    const currentUser = true
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}/>,
            title: 'View Profile',
            to: 'profile',
        },
        {
            icon: <FontAwesomeIcon icon={faMoneyBill}/>,
            title: 'Get Coin',
            to: 'coin',
        },
        {
            icon: <FontAwesomeIcon icon={faTools}/>,
            title: 'Settings',
            to: 'settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}/>,
            title: 'Log Out',
            to: 'log_out',
            separate: true,
        },
    ]
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          
            <img src={image.logo} alt='logo'/>
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

            {/* Main controller */}
            <div className={cx('actions')}>
            {currentUser?(
                <>
                <Tipppy content="Upload Video" placement='bottom'>
                    <button className={cx('actions-btn')}>
                        <FontAwesomeIcon icon={faCloudArrowUp}/>
                    </button>
                </Tipppy>
                </>
            )
            :(
                <>
                    <Button to="/register" text>Upload</Button>
                    <Button to="/login" primary>Login</Button>
                    
                </>
            )}
                <Menu items= {currentUser?userMenu:MENU_ITEMS} onChange={handleMenuOnChange}>
                    {currentUser?(
                            <img src="https://picsum.photos/200/200" className={cx('avatar')} alt="" />
                    ):(
                 
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </button>
                    )}
                </Menu>
            </div>
            
        </div>
    </header>
}

export default Header;