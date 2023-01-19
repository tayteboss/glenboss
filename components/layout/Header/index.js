import styled from 'styled-components';
import InnerWrapper from '../../common/InnerWrapper';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import useHeaderHeight from '../../../hooks/useHeaderHeight';

const options = require('../../../json/options.json');

const HeaderWrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	mix-blend-mode: difference;
`;

const HeaderInner = styled.div`
	padding: 16px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Header = ({ setMenuIsOpen, menuIsOpen }) => {
	const siteData = options?.data?.siteInformation;
	useHeaderHeight();

	return (
		<HeaderWrapper className="header">
			<InnerWrapper>
				<HeaderInner>
					<HeaderLogo menuIsOpen={menuIsOpen} />
					<HeaderMenu
						data={siteData?.menu[0]?.links}
						setMenuIsOpen={setMenuIsOpen}
						menuIsOpen={menuIsOpen}
					/>
				</HeaderInner>
			</InnerWrapper>
		</HeaderWrapper>
	);
};

export default Header;
