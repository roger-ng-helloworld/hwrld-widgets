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
			            		<a href={val.cta} className={self.props.css.cta}></a>          		
			            		<div className="col-sm-3">
			            			<div className={self.props.css['img-panel']}>	
			            				<img src={val.img} alt={val.title} />
			            			</div>	
			            		</div>
			            		<div className="col-sm-5 col-md-6">
				            		<div className={self.props.css.title}>{val.title}</div>
				            		<div>{val.subTitle}</div>
				            		<div>{val.rating} <img className={self.props.css.stars} src={'http://www.helloworld.com.au/l/Images/star-rating-' + Math.round(Number(val.rating)) + '.png'} alt="star rating" />
				            		</div>
				            		<div className={self.props.css.blurb}>{val.blurb}</div>        		
				            	</div>	
				            	<div className={self.props.css['price-container'] + ' col-sm-4 col-md-3'}>
				            		<div className={self.props.css['arrow-panel']}>
				            			<i></i>
				            		</div>
				            		<div className={self.props.css['price-panel']}>
					            		<div className={self.props.css['top-aggregator']}>{val.price.topAggregator}</div>
					            		<div className={self.props.css.price}>${val.price.price}*</div>
					            		<div className={self.props.css['bottom-aggregator']}>{val.price.bottomAggregator}</div>
				            		</div>
				            		
				            	</div>
			            	</li>
			            )
			       	})}
				</ul>

				<a href="this.props.general.moreActivities" className={this.props.css['see-more']}>See more Activities</a>
				
        	</div>
		);
	};
}