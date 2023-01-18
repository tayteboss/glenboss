import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import useScrolled from '../../../hooks/useScrolled';
import HeaderMenuButton from './HeaderMenuButton';
import HeaderMenuLinks from './HeaderMenuLinks';
import useViewportWidth from '../../../hooks/useViewportWidth';

const HeaderMenuWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const HeaderMenu = ({ data, setMenuIsOpen, menuIsOpen }) => {
	const hasScrolled = useScrolled(100);
	const viewportWidth = useViewportWidth();

	return (
		<HeaderMenuWrapper>
			<AnimatePresence>
				{hasScrolled || viewportWidth === 'mobile' || menuIsOpen ? (
					<HeaderMenuButton
						setMenuIsOpen={setMenuIsOpen}
						menuIsOpen={menuIsOpen}
					/>
				) : (
					<HeaderMenuLinks data={data} />
				)}
			</AnimatePresence>
		</HeaderMenuWrapper>
	);
};

export default HeaderMenu;
