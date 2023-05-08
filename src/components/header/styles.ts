import { theme } from '../../utils/theme';

export const createStyles = () => {
	return {
		header: {
			margin: theme.spacing(3, 0, 0),
			fontFamily: 'Permanent Marker',
			textAlign: 'center',
			fontSize: '40px',
			color: '#0077b6',
			textShadow: '1px 1px #023e8a'
		},
		header2: {
			margin: theme.spacing(0, 0, 0),
			fontFamily: 'Permanent Marker',
			textAlign: 'center',
			fontSize: '40px',
			color: '#0077b6',
			textShadow: '1px 1px #023e8a'
		}
	};
};
