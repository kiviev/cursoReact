import React from 'react';
import ReactDOM from 'react-dom';
import './foundation.min.css';
import ProgressBarClass from './ProgressBar';

// foundation
import { Row, Column } from 'react-foundation-components/lib/grid';
import { Button } from 'react-foundation-components/lib/button';
import { FlexVideo } from 'react-foundation-components/lib/flex-video';
import { Thumbnail } from 'react-foundation-components/lib/thumbnail';

class Ejemplo extends React.Component {

	constructor(props){
		super(props);
		this.youtube = '2gTBI4wZ5mo';
		this.images = [
			{
				title: 'otoño 1',
				src : 'http://www.paisajesbonitos.org/wp-content/uploads/2015/11/paisajes-bonitos-de-oto%C3%B1o-rio.jpg'
			},
			{
				title: 'otoño 2',
				src : 'http://www.paisajesbonitos.org/wp-content/uploads/2015/11/paisajes-bonitos-de-oto%C3%B1o-arbol.jpg'
			},
			{
				title: 'otoño 3',
				src : 'http://www.paisajesbonitos.org/wp-content/uploads/2015/11/paisajes-bonitos-de-oto%C3%B1o.jpg'
			},
		]
	}


getVideo(embed = false){
	let url = 'https://www.youtube.com/';
	if( embed ) return url + 'embed/' + this.youtube;
	return url + '/watch?v=' + this.youtube;
}

 render() {
 return (
 	<div>
 		<Row expanded>
			<Column small={12} medium={12} large={12} xlarge={12} xxlarge={12}>
				<h1> Otoño</h1>
			{
				this.images.map((image) => {
					return (
							<Thumbnail
							alt={image.title}
							src={image.src}
							width="33%"
							/>
						)
				})

			}
			</Column>
		
		</Row>
		<Row expanded>
			<Column small={12} medium={6} large={4} xlarge={2} xxlarge={5}>
				<Button size="tiny" color="primary" href="./">Home</Button>
				<Button size="small" color="alert" target="_blank" href="https://google.es">To Google</Button>
				<Button color="success">Save</Button>
				<Button size="large" color="warning">Delete</Button>
			</Column>
		</Row>
		<Row expanded>
			<Column small={12} medium={12} large={12} xlarge={12} xxlarge={12}>
				<ProgressBarClass />
			</Column>
		</Row>
		<Row expanded>
			<Column small={12} medium={12} large={12} xlarge={12} xxlarge={12}>
				<FlexVideo
					allowFullScreen
					frameBorder="0"
					src={this.getVideo(true)}
					widescreen
					width="100%"
					/>
			</Column>
		</Row>
		<Row expanded>
			<Column small={12} medium={12} large={12} xlarge={12} xxlarge={12}>
				<Button size="small" color="alert" target="_blank" href={this.getVideo()}>Ir a Youtube</Button>
			</Column>
		</Row>
		
 	</div>
 );
 }
}
export default Ejemplo;