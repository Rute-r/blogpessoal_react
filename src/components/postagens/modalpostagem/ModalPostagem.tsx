import Popup from 'reactjs-popup';
import FormPostagem from '../formpostagem/FormPostagem';

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css';

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded-2xl px-4 py-2 hover:bg-light-pink hover:text-dark-blue">
            Nova Postagem
          </button>
        }
        modal>
        <FormPostagem />
      </Popup>
    </>
  );
}

export default ModalPostagem;
