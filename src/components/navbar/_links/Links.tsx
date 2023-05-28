import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
// Style
import './links.modules.scss';
// Routes
import { routes } from '../../../router/routes';


const Links: FC = (): ReactElement => {
  return (
    <div className='links'>
      <NavLink className='link' to={routes.homePage}>HOME</NavLink>
      <NavLink className='link' to={routes.blogPage}>BLOG</NavLink>
    </div>
  );
};

export default Links;