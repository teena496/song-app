import React from 'react'
import { connect } from 'react-redux'

const SongDetails = ({song}) => {
    return (
        <div>
            <h2>Song Details</h2>
            <p>Title : {song.title}</p>
            <br/>
            <p>Duration : {song.duration}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails)