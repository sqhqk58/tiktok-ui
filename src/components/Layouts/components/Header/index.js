import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCloudArrowUp, faEarthAsia, faEllipsisVertical, faKeyboard, faMoneyBill, faSignOut, faTools, faUser } from '@fortawesome/free-solid-svg-icons';

import Tipppy from '@tippyjs/react'; // different import path!
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/popper/Menu';
import Image from '~/components/Image';
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
                            <Image src="https://picsum.photos/200/200" className={cx('avatar')} alt="" />
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