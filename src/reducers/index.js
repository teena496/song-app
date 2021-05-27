import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {title:'Wisdom Song', duration: '4:58'},
        {title:'Nobody loves me like You', duration: '4:43'},
        {title:'Raise a Hallelujah', duration: '7:50'},
        {title:'Peace in Christ', duration: '3:27'},
        {title:'10,000 reasons', duration: '5:42'}

    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})