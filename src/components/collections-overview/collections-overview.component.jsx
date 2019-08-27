import React from 'react';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
	<div className='collection-overview'>
		{collections.map( ({id, ...otherProps}) => (
			<CollectionPreview key={id} {...otherProps} />
			))
		}
	</div>
)


const mapStateToProps = createStructuredSelector({
	collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);