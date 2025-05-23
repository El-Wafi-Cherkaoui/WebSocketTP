import { useEffect, useState } from 'react';
import OnlineUsers from './OnlineUsers';

export default function Map({username}) {
    return <Boxes username={username}/>;
}

function Boxes({username}) {
    const [list, setList] = useState(() =>
        Array.from({ length: 10 }, () => Array(10).fill(null))
    );

    async function handleClick(rIndex, cIndex) {
        send_request_of_click(rIndex, cIndex)

        setList(prevList => {
            const newList = prevList.map(row => [...row]);
            newList[rIndex][cIndex] = 1;
            return newList;
        });
    };

    async function send_request_of_click(rIndex, cIndex) {

        await fetch(`http://${import.meta.env.VITE_REVERB_HOST}:8000/api/click`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ row: rIndex, col: cIndex, username }),
        });
    }


    useEffect(() => {
        if (!window.Echo) {
            console.error('Echo not initialized');
            return;
        }

        const channel = window.Echo.channel('click_channel')
            .listen('.click-event', (e) => {
                setList(prevList => {
                    const newList = prevList.map(row => [...row]);
                    newList[e.row][e.col] = 1;
                    return newList;
                });
                console.log('Received click from another component:', e.row, e.col);
            });

        return () => {
            channel.stopListening('.click-event');
        };
    }, []);


    return (
        <div className="list_box">
            {list.map((row, rIndex) => (
                <div key={rIndex}>
                    {row.map((col, cIndex) => (
                        <button key={cIndex} onClick={() => handleClick(rIndex, cIndex)}>
                            {col === null ? '-' : col}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}
