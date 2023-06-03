import { FC, ReactElement } from 'react';
// Style
import './pagesStatsCard.modules.scss';


interface PagesStatsCardProps {
    title: string;
    pagesNumber: number;
    backgroundGreenClass?: string;
}

const PagesStatsCard: FC<PagesStatsCardProps> = (props): ReactElement => {

    const { backgroundGreenClass, pagesNumber, title } = props;

    return (
        <div className={`pages-stats-card-container ${backgroundGreenClass}`}>
            <div className="page-progress">
                <h3>{pagesNumber}</h3>
                <h6>{title}</h6>
            </div>
        </div>
    );
};

export default PagesStatsCard;