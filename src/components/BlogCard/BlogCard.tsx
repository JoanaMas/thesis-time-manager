import { FC, ReactElement } from 'react';
// Style
import './blogCard.modules.scss';

interface BlogCardProps {
    articleTitle: string;
    imageURL: string;
    linkURL: string;

}

const BlogCard: FC<BlogCardProps> = (props): ReactElement => {

    const { articleTitle, imageURL, linkURL } = props;
    return (
        <div className="card">
            <div className="card-title">
                <h3>{articleTitle}</h3>
            </div>
            <div className='image'>
                <img src={imageURL} alt="productivityImage" />
                <a href={linkURL} target="_blank"> Read more </a>
            </div>
        </div>
    );
};

export default BlogCard;