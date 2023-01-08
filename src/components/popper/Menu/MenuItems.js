import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from "~/components/Button";
const cx = classNames.bind(styles)
function MenuItem({data, onClick}) {
    const classes = cx('menu-l',{
        separate: data.separate
    });
    return ( 
        <Button onClick={onClick} className={classes} to={data.to} leftIcon={data.icon}>{data.title}</Button>
     );
}

export default MenuItem;