import React from 'react';
import ReactDOM from 'react-dom';

import { Player ,ControlBar} from 'video-react';
import 'video-react/dist/video-react.css';
import './video.css';

const sources = {
		0: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
		1: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
		2: 'http://media.w3.org/2010/05/bunny/movie.mp4',
		3: 'http://media.w3.org/2010/05/video/movie_300.webm'
	};
var contador = 0;

class VideoComponent extends React.Component {

constructor (props){
	super(props);
	this.state = {
		source: sources[contador],
		muted : false
		};
	this.videoSiguiente = this.videoSiguiente.bind(this);
	this.videoAnterior = this.videoAnterior.bind(this);
	this.mute = this.mute.bind(this);
}

objectSize(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

videoSiguiente(ev){
	console.log('cambiando video' + ev);
	if(contador < this.objectSize(sources) - 1){
		contador++
	}else{
		contador = 0;
	}
	this.setState({source: sources[contador]})
	this.refs.player.load();
}
videoAnterior(ev){
	if(contador > 0){
		contador--;
	}else{
		contador = this.objectSize(sources) - 1;
	}
	this.setState({source: sources[contador]})
	this.refs.player.load();
}
mute(ev){
	this.refs.player.muted =!this.state.muted;
	this.setState({muted: !this.state.muted})
}

render(){

	return ( 
			<div>
				<Player
					ref="player"
					autoPlay >
					<source src={this.state.source} />
				</Player>
				<div className="buttonsGroup">
					<div className="buttons">
						<button onClick={this.videoAnterior}>Anterior</button>
						<button onClick={this.videoSiguiente}>Siguiente</button>
						<button onClick={this.mute}>{this.state.muted ? 'Oir' : 'Silenciar'}</button>
					</div>
				</div>
			</div>
		)
}

}

export default VideoComponent;