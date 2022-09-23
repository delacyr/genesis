import CardProfile from '../components/CardProfile';
import Header from '../components/Header';
import perfil from '../assets/perfil.jpg';
import SideBar from '../components/Sidebar';

export default function Home() {
  return (
    <>
      <Header />

      <div className="flex items-center space-x-4">
        <img className="w-36 h-36 rounded" src={perfil} alt="" />
        <div className="font-medium dark:text-white">
          <div>Delacyr Almeida Monteiro Ferreira</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            2º Ten QOEBM
          </div>
        </div>
      </div>

      <CardProfile />
    </>
  );
}
