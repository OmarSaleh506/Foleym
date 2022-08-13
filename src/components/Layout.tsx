import { ReactElement } from 'react';
import Header from './Header';

interface LayoutProps {
	children: ReactElement;
}
export function Layout({ children }: LayoutProps) {
	return <>
	<Header />
	
	{children}</>;
}