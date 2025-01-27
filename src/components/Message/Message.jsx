import classes from './Message.module.scss';

const Message = ({message, variant = 'success'}) => {
    return (
        <p className={classes[variant]}>{message}</p>
    );
};

export default Message;