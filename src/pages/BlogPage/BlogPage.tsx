import { FC, ReactElement } from 'react';
// Components
import Container from '../../components/container/Container';
import BlogCard from '../../components/BlogCard/BlogCard';
import AbstractFigure from '../../components/header/_abstractArtFigure/AbstractFigure';
// Enums
import abstractFigureEnums from '../../components/header/_abstractArtFigure/abstractFigureEnums';
// Style
import './blogPage.modules.scss';

const BlogPage: FC = (): ReactElement => {
  return (
    <Container className='blog-page-container'>

      {/* FLOATING ART */}

      <AbstractFigure
        width={abstractFigureEnums.WidthEnum.w300}
        height={abstractFigureEnums.HeightEnum.h300}
        backgroundColor={abstractFigureEnums.BackgroundColorEnum.purple}
        opacity={abstractFigureEnums.OpacityEnum.opacity1}
        zIndex={abstractFigureEnums.ZindexEnum.index0}
        top={0}
        right={300}
      />


      <AbstractFigure
        width={abstractFigureEnums.WidthEnum.w300}
        height={abstractFigureEnums.HeightEnum.h200}
        backgroundColor={abstractFigureEnums.BackgroundColorEnum.green}
        opacity={abstractFigureEnums.OpacityEnum.opacity75}
        zIndex={abstractFigureEnums.ZindexEnum.index0}
        top={100}
        right={500}
      />

      <AbstractFigure
        width={abstractFigureEnums.WidthEnum.w300}
        height={abstractFigureEnums.HeightEnum.h400}
        backgroundColor={abstractFigureEnums.BackgroundColorEnum.lightOrange}
        opacity={abstractFigureEnums.OpacityEnum.opacity75}
        zIndex={abstractFigureEnums.ZindexEnum.index0}
        top={100}
        right={50}
      />

      <AbstractFigure
        width={abstractFigureEnums.WidthEnum.w20}
        height={abstractFigureEnums.HeightEnum.h20}
        backgroundColor={abstractFigureEnums.BackgroundColorEnum.yellow}
        opacity={abstractFigureEnums.OpacityEnum.opacity75}
        zIndex={abstractFigureEnums.ZindexEnum.index0}
        top={100}
        right={200}
      />

      <div className='blog-page-white-container'>
        <h1>Read Our Blog To <span>Boost Productivity!</span></h1>
        <div className='cards-container'>
          <div className="cards-wrapper">

            <BlogCard
              articleTitle='How to Finish Your Work, One Bite at a Time'
              imageURL='https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              linkURL='https://www.scotthyoung.com/blog/2008/04/08/how-to-finish-your-work-one-bite-at-a-time/'
            />

            <BlogCard
              articleTitle='Rethinking Discipline'
              imageURL='https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              linkURL='https://www.scotthyoung.com/blog/2018/02/09/rethinking-discipline/'
            />
            <BlogCard
              articleTitle='How Sleep Affects Work Productivity'
              imageURL='https://images.pexels.com/photos/4064171/pexels-photo-4064171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              linkURL='https://thesleepdoctor.com/sleep-hygiene/sleep-and-productivity-at-work/'
            />
            <BlogCard
              articleTitle='20 Easy Ways to Boost Your Productivity'
              imageURL='https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              linkURL='https://www.businessnewsdaily.com/5658-easy-productivity-tips.html'
            />
            <BlogCard
              articleTitle='9 Habits Of Productive People'
              imageURL='https://www.magpierecruitment.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM1d6RHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--be853a5e1c343a05cd60e57b554b8d68fe7a16c8/Productivity%20blog.png'
              linkURL='https://www.forbes.com/sites/ilyapozin/2013/08/14/9-habits-of-productive-people/'
            />

          </div>
        </div>

      </div>
    </Container>
  );
};

export default BlogPage;