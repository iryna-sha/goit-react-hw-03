import { FaPhone } from 'react-icons/fa6';
import { BsPersonFill } from 'react-icons/bs';
import s from './Contact.module.css';

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li className={s.container}>
      <div className={s.textwrap}>
        <p>
          <FaPhone />
          {name}
        </p>
        <p>
          <BsPersonFill />
          {number}
        </p>
      </div>
      <button className={s.button} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
