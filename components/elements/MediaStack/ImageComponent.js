import Image from 'next/image';
import styled from 'styled-components';

const ImageComponentWrapper = styled.div`
	position: relative;
	padding-top: 56.25%;
`;

const ImageComponent = ({ data }) => {
	return (
		<ImageComponentWrapper>
			<Image src={data.url} layout="fill" />
		</ImageComponentWrapper>
	);
};

export default ImageComponent;
