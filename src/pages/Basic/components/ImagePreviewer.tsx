import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip';
import { useParams } from 'react-router-dom';

interface IImagePreviewer {
  id: string
}

const ImagePreviewer: React.FC<IImagePreviewer> = ({ id }) => {

  let { userId } = useParams();


  const getMenuDetails = (userId: string | undefined) => {
    console.log('[API] - get menu images - ', userId);
  }


  useEffect(() => {
    if (userId) {
      getMenuDetails(userId);
    } else {
      getMenuDetails(id);
    }
  }, [id, userId])


  return (
    <Box>
      <HTMLFlipBook
        style={{}}
        startPage={0}
        width={500}
        height={700}
        drawShadow={true}
        flippingTime={10}
        usePortrait={false}
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={0}
        showPageCorners={true}
        disableFlipByClick={false}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={700}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={false}
        mobileScrollSupport={true}
        onFlip={() => { }}
        onChangeOrientation={() => { }}
        onChangeState={() => { }}
        className={''}
      >
        <Box>
          <img
            src="http://via.placeholder.com/500x700"
            alt="cover"
            style={{
              float: 'left',
              width: '100%',
              // height: 700,
              // objectFit: 'cover'
            }}
            loading="lazy"
          />
        </Box>
        <Box>
          <img
            src="http://via.placeholder.com/500x700"
            alt="cover"
            style={{
              float: 'left',
              width: '100%',
              // height: 700,
              // objectFit: 'cover'
            }}
            loading="lazy"
          />
        </Box>
        <Box>
          <img
            src="http://via.placeholder.com/500x700"
            alt="cover"
            style={{
              float: 'left',
              width: '100%',
              // height: 700,
              objectFit: 'cover'
            }}
            loading="lazy"
          />
        </Box>
        <Box>
          <img
            src="http://via.placeholder.com/500x700"
            alt="cover"
            style={{
              float: 'left',
              width: '100%',
              // height: 700,
              objectFit: 'cover'
            }}
            loading="lazy"
          />
        </Box>
        <Box>
          <img
            src="http://via.placeholder.com/500x700"
            alt="cover"
            style={{
              float: 'left',
              width: '100%',
              // height: 700,
              objectFit: 'cover'
            }}
            loading="lazy"
          />
        </Box>
        <Box>
          <img
            src="http://via.placeholder.com/500x700"
            alt="cover"
            style={{
              float: 'left',
              width: '100%',
              // height: 700,
              objectFit: 'cover'
            }}
            loading="lazy"
          />
        </Box>
        <Box>
          <img
            src="http://via.placeholder.com/500x700"
            alt="cover"
            style={{
              float: 'left',
              width: '100%',
              // height: 700,
              objectFit: 'cover'
            }}
            loading="lazy"
          />
        </Box>
        <Box>
          <img
            src="http://via.placeholder.com/500x700"
            alt="cover"
            style={{
              float: 'left',
              width: '100%',
              // height: 700,
              objectFit: 'cover'
            }}
            loading="lazy"
          />
        </Box>

      </HTMLFlipBook>
    </Box>
  )
}

export default ImagePreviewer;