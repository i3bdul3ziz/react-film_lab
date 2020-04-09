import React, { Component } from 'react'
import AddToQueueIcon from '@material-ui/icons/AddToQueue'

export default class Fave extends Component {

    state = {
        isFave: false
    }

    handleClick = (e) => {
        e.stopPropagation()
        this.setState(prevState => ({
                isFave:!prevState.isFave 
            }))
        console.log("handling Fave click!")
    }

    render() {
        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return (
            <div className={"film-row-fave " + isFave}>
                <AddToQueueIcon onClick={this.handleClick}/>
            </div>
        )
    }
}
