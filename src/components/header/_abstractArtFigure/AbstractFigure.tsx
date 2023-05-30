import { FC, ReactElement } from 'react';
// Style
import './abstractFigure.modules.scss';
// Enum
import abstractFigureEnums from './abstractFigureEnums';


interface AbstractFigureProps {
  width: string;
  height: string;
  backgroundColor: string;
  opacity?: string;
  zIndex?: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

const AbstractFigure: FC<AbstractFigureProps> = (props): ReactElement => {

  const { 
    width = abstractFigureEnums.WidthEnum.w400, 
    height = abstractFigureEnums.HeightEnum.h200, 
    backgroundColor = abstractFigureEnums.BackgroundColorEnum.pink, 
    zIndex = abstractFigureEnums.ZindexEnum.index5,
    opacity, 
    top,
    right,
    bottom,
    left
   } = props;

  return (
    <div className={`abstract-figure ${width} ${height} ${backgroundColor} ${opacity} ${zIndex}`} style={{ top: `${top}px`,  right: `${right}px`, bottom: `${bottom}px`,  left: `${left}px` }}></div>
  );
};

export default AbstractFigure;