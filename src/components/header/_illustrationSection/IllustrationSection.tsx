import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
// MUI icons
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import AbstractFigure from '../_abstractArtFigure/AbstractFigure';
// Routes
import { routes } from '../../../router/routes';
// Enum
import abstractFigureEnums from '../_abstractArtFigure/abstractFigureEnums';
// Style
import './illustrationSection.modules.scss';

const IllustrationSection: FC = (): ReactElement => {

    const navigate = useNavigate();

    return (
        <div className="illustration">
            <div className="header-image-container">
                <div className="sub-title-container">
                    <h4>Explore our Blog to find some more productivity tips!</h4>
                    <span onClick={() => navigate(routes.blogPage)}>
                        <ArrowCircleRightIcon />
                    </span>
                </div>
            </div>

            <div>
                <AbstractFigure
                    width={abstractFigureEnums.WidthEnum.w200}
                    height={abstractFigureEnums.HeightEnum.h200}
                    backgroundColor={abstractFigureEnums.BackgroundColorEnum.green}
                    opacity={abstractFigureEnums.OpacityEnum.opacity1}
                    zIndex={abstractFigureEnums.ZindexEnum.index0}
                    top={240}
                    left={800}
                />

                <AbstractFigure
                    width={abstractFigureEnums.WidthEnum.w200}
                    height={abstractFigureEnums.HeightEnum.h100}
                    backgroundColor={abstractFigureEnums.BackgroundColorEnum.purple}
                    opacity={abstractFigureEnums.OpacityEnum.opacity75}
                    zIndex={abstractFigureEnums.ZindexEnum.index0}
                    top={400}
                    left={800}
                />

                <AbstractFigure
                    width={abstractFigureEnums.WidthEnum.w300}
                    height={abstractFigureEnums.HeightEnum.h200}
                    backgroundColor={abstractFigureEnums.BackgroundColorEnum.darkOrange}
                    opacity={abstractFigureEnums.OpacityEnum.opacity75}
                    zIndex={abstractFigureEnums.ZindexEnum.index0}
                    top={120}
                    right={100}
                />

                <AbstractFigure
                    width={abstractFigureEnums.WidthEnum.w300}
                    height={abstractFigureEnums.HeightEnum.h400}
                    backgroundColor={abstractFigureEnums.BackgroundColorEnum.pink}
                    opacity={abstractFigureEnums.OpacityEnum.opacity75}
                    zIndex={abstractFigureEnums.ZindexEnum.index0}
                    top={250}
                    right={50}
                />

                <AbstractFigure
                    width={abstractFigureEnums.WidthEnum.w20}
                    height={abstractFigureEnums.HeightEnum.h20}
                    backgroundColor={abstractFigureEnums.BackgroundColorEnum.yellow}
                    opacity={abstractFigureEnums.OpacityEnum.opacity75}
                    zIndex={abstractFigureEnums.ZindexEnum.index5}
                    top={100}
                    right={500}
                />

            </div>
        </div>
    );
};

export default IllustrationSection;
