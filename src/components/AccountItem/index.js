import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)
function AccountItem({data}) {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt="hoa"/>
            <Link to={`/@${data.nickname}`} className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick&&(<FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>)}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </Link>

        </div>
     );
}

export default AccountItem;