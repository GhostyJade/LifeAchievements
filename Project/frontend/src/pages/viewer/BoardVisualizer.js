import React, { useEffect } from 'react'
import { get } from '../../utils/localstoragehelper'

import Achievement from './Achievement'

export default function BoardVisualizer(props) { //is this achievement visualizer?

    let achievements = []
    useEffect(() => {
        const boardId = props.selected.boardId
        const username = get('username')
        console.log(props.boardId)
        fetch(`http://localhost:8080/boards/${username}/${boardId}`, {
            method: 'GET',
            headers: {
                'x-access-token': get('token')
            }
        }).then(response => response.json()).then(result => {
            if (result.status) {
                if (result.achievements.status) {
                    props.onDataChange(result.achievements.data.achievements)
                }
            }//TODO handle every exception, again...i know
        })
    }, [props.selected.boardId])
    
    if (props.data)
        achievements = props.data.map((achievement, index) => {
            return <Achievement key={achievement.id} data={achievement} />
        })
    
    return (
        <>
            {(props.data !== null) ? achievements : null}
        </>
    )
}