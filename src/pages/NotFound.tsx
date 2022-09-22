import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>Ops!</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
}
