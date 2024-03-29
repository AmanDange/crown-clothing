import { useNavigate } from 'react-router-dom';

import { 
  BackgroundImage, 
  Body, 
  DirectoryItemContainer } 
  from './directory-item.styles';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
      <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackgroundImage
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <Body>
          <h2>{title}</h2>
          <span>Shop Now</span>
        </Body>
      </DirectoryItemContainer>
  );
};

export default DirectoryItem;