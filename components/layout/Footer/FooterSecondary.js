import Link from 'next/link';
import styled from 'styled-components';
import cleanUrl from '../../../utils/cleanUrl';
import InnerWrapper from '../../common/InnerWrapper';

const FooterSecondaryWrapper = styled.div`
	padding: 16px 0;
`;

const FooterSecondaryInner = styled.div`
	display: flex;
	justify-content: space-between;

	&.view-element-fade-in {
		transition-delay: 500ms;
	}
`;

const LHS = styled.div`
	display: flex;
	align-items: center;
`;

const RHS = styled.div``;

const Text = styled.p`
	color: var(--colour-system-white-grey-800);
	margin-right: ${(props) => props.$mr ? props.$mr : '16px'};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-right: ${(props) => props.$mr ? props.$mr : '8px'};
	}
`;

const LinkTag = styled.a`
	color: var(--colour-system-white-grey-800);
	text-decoration: none;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:not(:last-child) {
		margin-right: 8px;
	}

	&:hover {
		color: var(--colour-white);
	}
`;

const FooterSecondary = ({ secondaryLinks, inView }) => {
	const hasLinks = secondaryLinks.length > 0;

	return (
		<FooterSecondaryWrapper>
			<InnerWrapper>
				<FooterSecondaryInner
					className={`view-element-fade-in ${
						inView ? 'view-element-fade-in--in-view' : ''
					}`}
				>
					<LHS>
						<Text className="type-esm">
							Ⓒ Glen Boss {new Date().getFullYear()}
						</Text>
						{hasLinks &&
							secondaryLinks.map((item, index) => (
								<Link
									href={cleanUrl(item)}
									passHref
									key={index}
								>
									<LinkTag className="type-esm">
										{item.linkTitle && item.linkTitle}
									</LinkTag>
								</Link>
							))}
					</LHS>
					<RHS>
						<Text className="type-esm" $mr="0">
							Built by
							<Link href="https://www.tayte.co/" passHref>
								<LinkTag className="type-esm" target="_blank">
									{' '}
									tayte.co
								</LinkTag>
							</Link>
						</Text>
					</RHS>
				</FooterSecondaryInner>
			</InnerWrapper>
		</FooterSecondaryWrapper>
	);
};

export default FooterSecondary;
