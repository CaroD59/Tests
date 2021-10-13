import { NavLink } from 'react-router-dom';
import Style from './style';

export default function Home() {
  return (
    <Style>
      <div className='TEST'>
        <div className='title'>
          <h1>TESTS</h1>
        </div>
        <div className='listTests'>
          <ul>
            <li>
              <NavLink to='/dropdown'>DROPDOWN</NavLink>
            </li>
            <li>
              <NavLink to='/checkbox'>CHECKBOX</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Style>
  );
}
