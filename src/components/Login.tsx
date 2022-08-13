import { useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

export interface ISigninPageProps {}
interface Inputs {
	email: string;
	password: string;
}
const Login: React.FunctionComponent<ISigninPageProps> = (props) => {
	const auth = getAuth();
	const navigate = useNavigate();
	const [authing, setAuthing] = useState(false);
	const [login, setLogin] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		console.log(data);
		if (login) {
			window.alert('try agin');
		} else {
			navigate('/movies');
		}
	};
	const signInWithGoogle = async () => {
		setAuthing(true);

		signInWithPopup(auth, new GoogleAuthProvider())
			.then((response) => {
				console.log(response.user.uid);
				navigate('/movies');
			})
			.catch((error) => {
				console.log(error);
				setAuthing(false);
			});
	};
	return (
		<div className="login">
			<div className="login-container sign-up-content">
				<h1>Login</h1>
				<form onSubmit={handleSubmit(onSubmit)} className="login-form">
					<input type="text" placeholder="Email" {...register('email', { required: true })} />
					{errors.email && <p className="error-p">Please enter a valid email.</p>}
					<input type="password" placeholder="Password" {...register('password', { required: true })} />
					{errors.password && <p className="error-p">Please enter Your password.</p>}
					<button onClick={() => setLogin(true)} type="submit" className="login-btn-login">
						Login
					</button>{' '}
					<br />
					<div className="login-underline">_______________________________________________</div>
					<div className="login-up-continuer">
						<h1>or</h1>
						<div className="login-ub-btn">
							<button
								onClick={() => signInWithGoogle()}
								disabled={authing}
								type="submit"
								className="login-btn-create-acc sign-up"
							>
								<AiOutlineGoogle size={45} />
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
