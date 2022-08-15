import { getAuth, signOut } from 'firebase/auth';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
export default function Profile() {
	const auth = getAuth();
	const navigate = useNavigate();
	return (
		<>
			<div className="profile-background">
				<div className="black"></div>
				<div className="profile">
					<img className="img-git" src="https://github.com/github.png?size=460" alt="" />
					<div className="edit-profile">Edit profile</div>
					<div className="info-center">
						<h1>
							<strong>OmarAlwahiby</strong>
						</h1>
						<p>404 bio not found</p>
					</div>
				</div>
				<div className="btn-logout">
					<button
						className="login-btn-login logout"
						onDoubleClick={() => signOut(auth)}
						onClick={() => navigate('/')}
					>
						Logout
					</button>
					<button className="login-btn-login logout" onClick={() => navigate('/movies')}>
						<BiArrowBack />
						Back
					</button>
				</div>
			</div>
		</>
	);
}
