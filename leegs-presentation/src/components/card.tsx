import React from 'react';
import styles from '../styles/modules/Card.module.scss';

interface CardProps {
  children?: React.ReactNode;
  title: string;
  content?: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ children, title, content, image }) => {

  return (
    <div className='box overflow-hidden max-w-sm bg-primary'>
        {image && <img className="w-full" src={image} alt={title} />}
        <div className="px-6 py-4">
        {title && <div className="font-bold text-xl mb-2">{title}</div>}
        {content && <p className="text-base">{children ?? content}</p>}
        </div>

        <div className="px-6 pt-4 pb-2">
            <span className={`${styles.tag}`}>#photography</span>
            <span className={`${styles.tag}`}>#travel</span>
            <span className={`${styles.tag}`}>#winter</span>
        </div>
    </div>
  );
};

export default Card;
