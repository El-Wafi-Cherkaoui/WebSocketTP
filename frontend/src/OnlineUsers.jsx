import { useEffect, useState } from "react";

export default function OnlineUsers() {
    const [updates, setUpdates] = useState([])
    useEffect(()=>{
        window.Echo.channel('click_channel')
        .listen('.click-event', (e) => {
            setUpdates((prev)=>[...prev, e])
            console.log('Clicked at:', e.row, e.col, 'by:', e.username);
        });
    },[])
    console.log('updates: ', updates);

    return(
        <div className="online_users">
            {
                updates.map((update)=>{
                return (
                    <div>
                        <h3>{update.username}</h3>
                        row : {update.row} <br />
                        col : {update.col}
                    </div>
                    )
                })
            }
        </div>
    )
}
