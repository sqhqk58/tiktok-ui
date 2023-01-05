import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from "~/components/Button";
const cx = classNames.bind(styles)
function MenuItem({data}) {
    return ( 
        <Button className={cx('menu-l')} to={data.to} leftIcon={data.icon}>{data.title}</Button>
     );
}

export default MenuItem;