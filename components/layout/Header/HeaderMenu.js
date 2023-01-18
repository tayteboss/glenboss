import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import useScrolled from '../../../hooks/useScrolled';
import HeaderMenuButton from './HeaderMenuButton';
import HeaderMenuLinks from './HeaderMenuLinks';

const HeaderMenuWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const HeaderMenu = ({ data, setMenuIsOpen, menuIsOpen }) => {
	const hasScrolled = useScrolled(100);

	return (
		<HeaderMenuWrapper>
			<AnimatePresence>
				{hasScrolled ? (
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
