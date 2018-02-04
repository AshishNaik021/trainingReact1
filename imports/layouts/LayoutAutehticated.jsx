import React from 'react';
import HeaderAutehticated from '/imports/components/HeaderAutehticated.jsx';
import Footer from '/imports/components/Footer.jsx';

export const LayoutAutehticated = ({content}) => (
		<div>
			<HeaderAutehticated />

			{content}

			<Footer />
		</div>						
);