import styled from 'styled-components';
import Link from 'next/link';
import { renderNodeRule, StructuredText } from 'react-datocms';
import { isLink, isParagraph } from 'datocms-structured-text-utils';

const Content = styled.div``;

const RichText = ({ className, data, color }) => {
	return (
		<Content className={`${className} content content--${color}`}>
			<StructuredText
				data={data}
				customNodeRules={[
					renderNodeRule(isLink, ({ node, children, key }) => {
						return (
							// <Link
							// 	href={'hello'}
							// 	passHref
							// 	key={key}
							// 	scroll={false}
							// >
								<a href={node.url} target={'_blank'} key={key}>{children}</a>
							// </Link>
						);
					}),
					renderNodeRule(isParagraph, ({ children, key }) => {
						return <p key={key}>{children}</p>;
					})
				]}
			/>
		</Content>
	);
};

export default RichText;