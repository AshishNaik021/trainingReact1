import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from '../imports/layouts/MainLayout.jsx';
import {LayoutAutehticated} from '../imports/layouts/LayoutAutehticated.jsx';

import Homepage from '../imports/components/Homepage.jsx';
import AboutUs 	from '../imports/components/AboutUs.jsx';
import Services from '../imports/components/Services.jsx';
import Contact 	from '../imports/components/Contact.jsx';
import EmpForm 	from '../imports/components/EmpForm.jsx';
import EmpForm2 from '../imports/components/EmpForm2.jsx';
import Signup 	from '../imports/components/Signup.jsx';
import Login 	from '../imports/components/Login.jsx';
import Dashboard from '../imports/components/Dashboard.jsx';
import MatchMaker from '../imports/components/MatchMaker.jsx';


FlowRouter.route('/',{
	action(){
		mount(MainLayout,{
			content : (<Homepage />),
		});
	}
});

FlowRouter.route('/about-us',{
	action(){
		mount(MainLayout,{
			content : (<AboutUs />),
		});
	}
});

FlowRouter.route('/services',{
	action(){
		mount(MainLayout,{
			content: (<Services />)
		});
	}
});

FlowRouter.route('/contact',{
	action(){
		mount(MainLayout,{
			content : (<Contact />)
		});
	}
});

FlowRouter.route('/empform',{
	action(){
		mount(LayoutAutehticated,{
			content : (<EmpForm2 />)
		});
	}
});

FlowRouter.route('/signup',{
	action(){
		mount(MainLayout,{
			content : (<Signup />)
		});
	}
});

FlowRouter.route('/login',{
	action(){
		mount(MainLayout,{
			content : (<Login />)
		});
	}
});

FlowRouter.route('/dashboard',{
	action(){
		mount(LayoutAutehticated,{
			content : (<Dashboard />)
		});
	}
});


FlowRouter.route('/matchMaking',{
	action(){
		mount(LayoutAutehticated,{
			content : (<MatchMaker />)
		});
	}
});


