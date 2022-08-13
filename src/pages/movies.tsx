import AuthRoute from '../components/AuthRoute';
import { Layout } from '../components/Layout';
import Originals from '../components/Originals';

export default function MoviesPage() {
	return (
		<AuthRoute>
			<Layout>
				<Originals />
			</Layout>
		</AuthRoute>
	);
}
