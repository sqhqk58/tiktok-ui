import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)
function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          
            <img src={image.logo} alt='logo'/>
  
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
            <div className={cx('actions')}></div>
        </div>
    </header>
}

export default Header;