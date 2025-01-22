import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import { ReactNode, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Footer() {
  // eslint-disable-next-line prefer-const
  let data = new Date().getFullYear();

  const { usuario } = useContext(AuthContext);

  let component: ReactNode;

  if (usuario.token !== '') {
    component = (
      <div className="flex justify-center bg-dark-blue text-light-pink font-quicksand">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-semibold">Blog Pessoal Rute | Copyright: {data}</p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <LinkedinLogo size={48} weight="regular" />
            <InstagramLogo size={48} weight="regular" />
            <FacebookLogo size={48} weight="regular" />
          </div>
        </div>
      </div>
    );
  }

  return <>{component}</>;
}

export default Footer;
