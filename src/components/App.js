
import React from 'react';
import ReactDOM from 'react-dom';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = {videos: [], SelectedVideo : null};
    
    componentDidMount(){
        this.onTermSubmit('cars');
    }

    onTermSubmit = async (term) => {
       const response = await youtube.get('/search', {
            params : {
                q : term 
            }
       });
        this.setState({
            videos : response.data.items ,
            SelectedVideo : response.data.items[0]
         });
    }; 

    onVideoSelect = (video) => {
        this.setState({
            SelectedVideo : video
         });
    };

    render(){
        return(
            <div className = 'ui container'>
                <SearchBar onFormSubmit = {this.onTermSubmit} />
                <div className  = 'ui grid'>
                    <div className = 'ui row'>
                        <div className = 'eleven wide column'>
                             <VideoDetail video = {this.state.SelectedVideo} />
                        </div>
                        <div className = 'five wide column'>
                            <VideoList  
                                videos = {this.state.videos}
                                onVideoSelect = {this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default App;