import {combineReducers} from 'redux';

// We are going to have two reducers
// One that return the static list of songs, other that allow user to select a very specific song once they click on select button.

const songReducer = () => {
    //we will return an array of object where every object represents different songs
    return [
        {
            title : 'Way down we go',
            duration : '4:05'
        },
        {
            title : 'Smile, the worst is yet to come',
            duration : '2:05'
        },
        {
            title : 'Dancing with the ghost',
            duration : '3:09'
        },
        {
            title : 'Aise kyun',
            duration : '4:37'
        }
        
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs : songReducer,
    selectedSong: selectedSongReducer
});