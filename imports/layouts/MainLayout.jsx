import React from 'react';
import Header from '/imports/components/Header.jsx';
import Footer from '/imports/components/Footer.jsx';

export const MainLayout = ({content}) => (
		<div>
			<Header />

			{content}

			<Footer />
		</div>						
);