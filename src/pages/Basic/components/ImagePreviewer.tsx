import { Box } from '@mui/material';
import React from 'react'
import HTMLFlipBook from 'react-pageflip';

const ImagePreviewer = () => {

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