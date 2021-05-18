//Action creator

// we are don=ing named export here instead of the default one as we want to export multiple functions
export const selectSong = (song) => {
    //return an action
    return {
        type : 'SONG_SELECTED',
        payload : song
    };
}; 