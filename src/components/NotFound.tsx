import { Link } from 'react-router-dom';

export default function NotFond() {
	return (
		<div>
			<div className="flex-cummunity">
				<div>
					<img src="https://static.xx.fbcdn.net/rsrc.php/yu/r/Ddk-AuWE7VS.svg" alt="" />
				</div>
				<div>
					<p>This Page Isn't Available</p>
				</div>
				<div>
					<h4>
						This may be because of a technical error that we're <br /> working to get fixed. Try reloading
						this page.
					</h4>
				</div>
				<div>
					<Link to={'/'}>
						<button>Reload Page</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
