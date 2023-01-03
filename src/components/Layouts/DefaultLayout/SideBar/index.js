import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
function SideBar() {
    return <aside className={cx('wrapper')}>
        <h2>Side bar</h2>
    </aside>
}

export default SideBar;