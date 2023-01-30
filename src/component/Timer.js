import React, { useEffect } from 'react';

const Timer = (props) => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는 중')
        },1000);
        return() =>{
            clearInterval(timer);
            console.log('타이머 종료')
        }
    },[]);
    return (
        <div>
           <span>타이머 콘솔에서 확인</span> 
        </div>
    );
};

export default Timer;