import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">Home</h1>
      <p>
        <Link to="/login">Login</Link>
      </p>
    </>
  );
}
