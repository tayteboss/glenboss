import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
	:root {
		--colour-white: ${theme.colours.white};
		--colour-black: ${theme.colours.black};
		--colour-system-white-grey-50: ${theme.colours.systemWhite.grey50};
		--colour-system-white-grey-600: ${theme.colours.systemWhite.grey600};
		--colour-system-white-grey-700: ${theme.colours.systemWhite.grey700};
		--colour-system-white-grey-800: ${theme.colours.systemWhite.grey800};
		--colour-system-white-grey-900: ${theme.colours.systemWhite.grey900};
		--colour-system-black-grey-50: ${theme.colours.systemBlack.grey50};
		--colour-system-black-grey-100: ${theme.colours.systemBlack.grey100};
		--colour-system-black-grey-200: ${theme.colours.systemBlack.grey200};
		--colour-system-black-grey-300: ${theme.colours.systemBlack.grey300};
		--colour-system-black-grey-400: ${theme.colours.systemBlack.grey400};
		--colour-system-black-grey-500: ${theme.colours.systemBlack.grey500};
		--font-default: ${theme.fonts.default};
		--transition-speed-default: ${theme.transitionSpeed.default};
		--transition-speed-fast: ${theme.transitionSpeed.fast};
		--transition-speed-extra-fast: ${theme.transitionSpeed.extraFast};
		--transition-speed-slow: ${theme.transitionSpeed.slow};
		--transition-speed-extra-slow: ${theme.transitionSpeed.extraSlow};
		--transition-ease: cubic-bezier(0.65, 0, 0.35, 1);
	}


	body,
	html,
	#root
	{
		cursor: none;

		@media ${theme.mediaBreakpoints.mobile}
		{
			cursor: initial;
		}
	}

	a,
	button
	{
		cursor: none;

		&:hover
		{
			cursor: none;

			@media ${theme.mediaBreakpoints.mobile}
			{
				cursor: pointer;
			}
		}
	}

	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
		list-style: none;
		background: none;
		outline: none;
		border-radius: 0;
		box-shadow: none;
		font-weight: 100;
	}

	::selection {
		background-color: var(--colour-system-white-grey-700);
		color: var(--colour-white);
	}

	html {
		scroll-behavior: smooth;
		background: ${theme.colours.black};

		&.no-scroll {
			overflow-y: hidden;
		}
	}

	body {
		position: relative;
		background-color: var(--colour-system-white-grey-50);
	}

	input,
	textarea,
	select,
	button,
	label,
	body {
		font-family: var(--font-default);
		color: var(--colour-black);
		line-height: 1.4;
	}

	strong,
	b {
		font-weight: 900;
	}

	em {
		font-style: italic;
	}

	a {
		text-decoration: underline;
		color: var(--colour-black);
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	button {
		cursor: pointer;
	}

	h1,
	.type-h1 {
		font-size: ${theme.size.h1};
		line-height: 2.813rem;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h1};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h1};
			line-height: 2.125rem;
		}
	}

	h2,
	.type-h2 {
		font-size: ${theme.size.h2};
		line-height: 2.25rem;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h2};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h2};
			line-height: 1.75rem;
		}
	}

	h3,
	.type-h3 {
		font-size: ${theme.size.h3};
		line-height: 1.938rem;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h3};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h3};
			line-height: 1.563rem;
		}
	}

	h4,
	.type-h4 {
		font-size: ${theme.size.h4};
		line-height: 1.563rem;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h4};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h4};
			line-height: 1.375rem;
		}
	}

	p,
	.type-p,
	a,
	button,
	div {
		font-size: ${theme.size.body};
		line-height: 1.938rem;

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.body};
			line-height: 1.75rem;
		}
	}

	.type-extra-large {
		font-size: ${theme.size.extraLarge};
		line-height: 10rem;

		@media ${theme.mediaBreakpoints.tabletLandscape}
		{
			font-size: ${theme.sizeTablet.extraLarge};
			line-height: 1;
		}

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeMobile.extraLarge};
			line-height: 1;
		}
	}

	.type-sm {
		font-size: ${theme.size.small};
		line-height: 1.375rem;
	}

	.type-esm {
		font-size: ${theme.size.extraSmall};
	}

	.sm-link-hover {
		position: relative;

		transition: all var(--transition-speed-default) var(--transition-ease);

		&:hover {
			transform: translateX(16px);

			&::before {
				opacity: 1;
				transform: translateX(-8px);
			}
		}

		&::before {
			content: '';
			position: absolute;
			top: 6px;
			left: -8px;
			background: ${theme.colours.white};
			border-radius: 50%;
			height: 8px;
			width: 8px;
			opacity: 0;
			transform: translateX(8px);

			transition: all var(--transition-speed-default) var(--transition-ease);
		}
	}

	.tab-radius {
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
		box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.1);
	}

	.view-element-fade-in
	{
		opacity: 0;

		transition: opacity 300ms ease;

		&--in-view
		{
			opacity: 1;
		}
	}

	.view-element-bottom-top
	{
		opacity: 0;
		transform: translateY(50px);

		transition: opacity 300ms ease, transform 300ms ease;

		&--in-view
		{
			opacity: 1;
			transform: translateY(0);
		}
	}

	.view-element-scale-up
	{
		transform: scale(0.95);
		opacity: 0;

		transition: opacity 300ms ease, transform 300ms ease;

		&--in-view
		{
			opacity: 1;
			transform: scale(1);
		}
	}

	::placeholder {
		color: currentcolor;
		opacity: 1;
	}

	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-results-button,
	input[type="search"]::-webkit-search-results-decoration {
		-webkit-appearance: none;
	}

	input[type="hidden"] {
		display: none;
	}

	input,
	textarea,
	select {
		padding: 0.125rem 0;
		font-size: ${theme.size.body};
		width: 100%;
		appearance: none;
	}

	input::placeholder,
	textarea::placeholder {
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	textarea {
		min-height: 8rem;
	}

	label {
		display: inline-block;
	}

	.overflow-hidden {
		overflow: hidden;
	}

	img,
	video {
		max-width: 100%;
		display: block;
		height: auto;
	}

	iframe {
		max-width: 100%;
		display: block;
	}

	.content {
		h1,
		h2,
		h3,
		h4,
		ul,
		ol,
		blockquote,
		figure,
		img,
		video,
		iframe,
		.button {
			&:not(:last-child) {
				margin-bottom: 1rem;
			}
		}

		p {
			&:not(:last-child)
			{
				margin-bottom: 1.25rem;
			}
		}

		ul,
		ol
		{
			padding-left: 1.25rem;
			font-size: ${theme.size.body};

			li
			{
				list-style: disc;
				line-height: 1.5;

				&:not(:last-child)
				{
					margin-bottom: 0.125rem;
				}
			}
		}

		ol
		{
			li
			{
				list-style: decimal;
			}
		}

	input:-webkit-autofill,
	input:-webkit-autofill:hover, 
	input:-webkit-autofill:focus, 
	input:-webkit-autofill:active
	{
		-webkit-box-shadow: 0 0 0 30px #FB5E02 inset;
	}

	input:-webkit-autofill
	{
		-webkit-text-fill-color: white;
	}
`;
