import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles)
function Button({
        to, 
        hef, 
        className,
        primary=false,
        outline=false,
        disabled=false,
        text = false, 
        small=false, 
        large = false,
        rounded = false,
        children,
        onClick, 
        leftIcon,
        rightIcon,
        ...passProps
    }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    };
    //delete event when disabled
    if(disabled){
        Object.keys(props).forEach(key =>{
            if(key.startsWith('on') && typeof props[key]==='function'){
                delete props[key];
            }
        });
    }
    if(to){
        props.to = to
        Comp = Link
    }
    else if(hef){
        props.hef = hef
        Comp = 'a'
    }
    
    const classes = cx('wrapper',{
        primary,
        outline,
        text, 
        small,
        large,
        disabled,
        rounded,
        [className]: className,
    })
    return ( 
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
     );
}

export default Button;