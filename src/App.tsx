import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Step1 from './pages/step1';
import Step2 from './pages/step2';
import Step3 from './pages/step3';
import Result from './pages/result';

const App = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<Step1 />} />
				<Route path='/step2' element={<Step2 />} />
				<Route path='/step3' element={<Step3 />} />
				<Route path='/result' element={<Result />} />
				<Route path='*' element={<Step1 />} />
			</Route>
		</Routes>
	);
};

export default App;
