import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-slate-400">
      <h1 className="text-3xl">Home</h1>
      <p>
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
