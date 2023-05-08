import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Provider } from 'react-redux';
import 'dayjs/locale/ru';
import App from './App';
import './index.css';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ru'>
				<Provider store={store}>
					<App />
				</Provider>
			</LocalizationProvider>
		</BrowserRouter>
	</React.StrictMode>
);
