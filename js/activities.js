import React, {Component} from 'react';
import styleable from 'react-styleable';
import coreStyles from '../css/core-widget.scss';
import css from '../css/activities.scss';

@styleable(css)
export default class Activities extends Component {
	render() {
		let self = this;
		return (
			<div className={'hwrld-widget ' + this.props.css['hwrld-widget']}>				
				<ul className={this.props.css.list + ' container-fluid'}>
					{this.props.deals.items.map(function(val, ind){			            
			            return (
			            	<li key={ind} className={self.props.css['list-item'] + ' row'}>
			            		<a href={val.cta} className={self.props.css.cta}>CTA</a>          		
			            		<div className={self.props.css['img-container'] + ' col-sm-3'}>	
			            			<img src={val.img} alt={val.title} />
			            		</div>
			            		<div className="col-sm-6">
				            		<div className={self.props.css.title}>{val.title}</div>
				            		<div>{val.subTitle}</div>
				            		<div>{val.rating}</div>
				            		<div className={self.props.css.blurb}>{val.blurb}</div>        		
				            	</div>	
				            	<div className="col-sm-3">
				            		<div>{val.price.topAggregator}</div>
				            		<div>{val.price.price}</div>
				            		<div>{val.price.bottomAggregator}</div>
				            	</div>
			            	</li>
			            )
			       	})}
				</ul>

				<div>Activities</div>
				
        	</div>
		);
	};
}