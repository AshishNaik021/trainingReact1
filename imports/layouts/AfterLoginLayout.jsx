import React from 'react';
import HeaderAfterLogin from '/imports/components/HeaderAfterLogin.jsx';
import Footer from '/imports/components/Footer.jsx';

export const AfterLoginLayout = ({content}) => (
		<div>
			<HeaderAfterLogin />

			{content}

			<Footer />
		</div>						
);