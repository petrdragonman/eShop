import classes from './Button.module.scss';

const Button = ({children, variant, ...rest}) => {
    const btnClasses = [classes.btn];
    if (variant) {
        btnClasses.push(classes[variant]);
    }

    //console.log(rest);

    return (
        <button {...rest} className={btnClasses.join(' ')}>
            {children}
        </button>
    );
};

export default Button;