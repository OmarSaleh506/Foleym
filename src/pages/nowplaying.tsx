import AuthRoute from '../components/AuthRoute';
import { Layout } from '../components/Layout';
import NowPlaying from '../components/NowPlaying';

export default function NowPlayingPage() {
	return (
		// <AuthRoute>
		// </AuthRoute>
		<Layout>
			<NowPlaying />
		</Layout>
	);
}
