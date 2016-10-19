import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

export const Root = () => {
	return(
		<BrowserRouter>
			<routes>
				<Match exactly pattern="/" component={StorePicker}/>
				<Match exactly pattern="/store/:storeId" component={App}/>
				<Miss component={NotFound}/>
			</routes>
		</BrowserRouter>
	)
}

export default Root;