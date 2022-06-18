import { createStitches } from '@stitches/react';

export interface IRollingTheme {
	colors: {
		primary: string,
		onPrimary: string,
		primaryContainer: string,
		onPrimaryContainer: string,

		secondary: string,
		onSecondary: string,
		secondaryContainer: string,
		onSecondaryContainer: string,

		tertiary: string,
		onTertiary: string,
		tertiaryContainer: string,
		onTertiaryContainer: string,

		error: string;
		onError: string,
		errorContainer: string,
		onErrorContainer: string,

		background: string,
		onBackground: string,

		surface: string,
		onSurface: string,

		surfaceVariant: string,
		onSurfaceVariant: string,

		outline: string,
	},

	breakpoints: {
		mobile: string,
		mobileMin: string,

		tablet: string,
		tabletMin: string,

		desktop: string,
		desktopMin: string,

		wide: string,
		wideMin: string,

		hd: string
	}
}

export const { styled, getCssText, createTheme, globalCss } = createStitches<'', {}, IRollingTheme>({
	theme: {
		fonts: {
			roboto: 'Roboto, sans-serif, system-ui',
			system: 'system-ui',
		},

		space: {
			1: '14px',
			2: '16px',
			3: '18px',
			4: '20px',
			5: '22px',
			6: '24px',
			7: '26px',
		},

		fontSizes: {
			1: '13px',
			2: '14px',
			3: '16px',
			4: '18px',
			5: '20px',
		},

		colors: {
			primary: "#52DDB0",
			onPrimary: "#003828",
			primaryContainer: "#00513B",
			onPrimaryContainer: "#72FACB",

			secondary: "#FFB49D",
			onSecondary: "#611300",
			secondaryContainer: "#881F00",
			onSecondaryContainer: "#FFDACF",

			tertiary: "#EFB8C8",
			onTertiary: "#492532",
			tertiaryContainer: "#633B48",
			onTertiaryContainer: "#FFD8E4",

			error: "#F2B8B5",
			onError: "#601410",
			errorContainer: "#8C1D18",
			onErrorContainer: "#F9DEDC",

			background: "#1C1B1F",
			onBackground: "#E6E1E5",

			surface: "#1C1B1F",
			onSurface: "#E6E1E5",

			surfaceVariant: "#49454F",
			onSurfaceVariant: "#CAC4D0",

			outline: '#938F99'
		},

		fontWeights: {
			normal: 'normal',
			bold: 'bold',
			black: 'black',
		},

		lineHeights: {
			1: 'normal',
		},

		letterSpacings: {
			1: '0px',
		},

		radii: {
			1: '4px',
			round: '99%',
		},

		breakpoints: {
			mobile: '762px',
			mobileMin: '320',
	
			tablet: '1279px',
			tabletMin: '763px',
	
			desktop: '1919px',
			desktopMin: '1280px',
	
			wide: '2159px',
			wideMin: '1920px',
	
			hd: '2160px'
		}
	},
});

export const lightTheme = createTheme({
	colors: {
		primary: "#006C50",
		onPrimary: "#FFFFFF",
		primaryContainer: "#72FACB",
		onPrimaryContainer: "#002116",

		secondary: "#B22C00",
		onSecondary: "#FFFFFF",
		secondaryContainer: "#FFDACF",
		onSecondaryContainer: "#3C0800",

		tertiary: "#7D5260",
		onTertiary: "#FFFFFF",
		tertiaryContainer: "#FFD8E4",
		onTertiaryContainer: "#31111D",

		error: "#B3261E",
		onError: "#FFFFFF",
		errorContainer: "#F9DEDC",
		onErrorContainer: "#410E0B",

		background: "#FFFBFE",
		onBackground: "#1C1B1F",

		surface: "#FFFBFE",
		onSurface: "#1C1B1F",
		
		surfaceVariant: "#E7E0EC",
		onSurfaceVariant: "#49454F",

		outline: '#79747E'
	},
});