import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';


class SongList extends React.Component{

    renderList(){
        // selectSong(); --> NO!!
        return this.props.songs.map((song)=>{
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={()=>this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render() {
        // this.props is actually equal to {songs : state.songs}
        //console.log(this.props.songs);
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

//conventionally we name this function like this.
//we are taking state objects and do something so that data eventually show up as prop inside component
//Any time we change the state object, this function will rerun with the newly created state object
const mapStateToProps = (state) => {
    //console.log(state);
    return {songs : state.songs};
}

//think of it as function returning a function: connect()(). It's actually a react component.
export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);

// or if we use es15 syntax
// export default connect(mapStateToProps, {selectSong})(SongList);