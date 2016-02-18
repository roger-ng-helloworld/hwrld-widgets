import React, {Component} from 'react';

class Activities extends Component {
	render() {
		return (
			<div className="hwrld-widget">					
				
				<ul>
					{this.props.deals.items.map(function(val, ind){
			            return (
			            	<li key={ind}>
			            		<a href={val.cta}>CTA</a>          		
			            		<div>	
			            			<img src={val.img} alt={val.title} />
			            		</div>
			            		<div>
				            		<div>{val.title}</div>
				            		<div>{val.subTitle}</div>
				            		<div>{val.rating}</div>
				            		<div>{val.blurb}</div>        		
				            	</div>	
				            	<div>
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

export default Activities;