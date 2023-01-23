import Image from 'next/image';
import styled from 'styled-components';

const ImageComponentWrapper = styled.div`
	position: relative;
	padding-top: 56.25%;
`;

const ImageComponent = ({ data }) => {
	return (
		<ImageComponentWrapper className="image-component-wrapper">
			<Image src={data.url} layout="fill" objectFit="cover" />
		</ImageComponentWrapper>
	);
};

export default ImageComponent;
