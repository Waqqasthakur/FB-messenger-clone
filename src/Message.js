// es7 snippets
import './Message.css';
import React from 'react';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { forwardRef } from 'react';
//import { makeStyles } from '@material-ui/core/styles';


const Message = forwardRef(({message, username}, ref) => {

    const isUser = username === message.username;

    return (
        <div ref={ref}>
            <Card className={isUser ? "message__userCard" : 'message__guestCard'}>
                <CardContent>
                    <Typography color = "white" variant="h6" component="h10">
                        {!isUser && `${message.username} :`} {message.message}
                    </Typography>
                </CardContent>
            </Card>     
        </div>
    )
})

export default Message;
