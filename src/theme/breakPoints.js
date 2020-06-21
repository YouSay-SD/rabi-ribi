import { css } from 'styled-components';

// BreakPoints
export const breakPoints = {
    xs: '575px',
    sm: '767px',
    md: '991px',
    lg: '1199px'
}

// MIN-WIDTH
export const respondAbove = Object.keys(breakPoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${breakPoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});

// MAX-WIDTH
export const respondBelow = Object.keys(breakPoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (max-width: ${breakPoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});

