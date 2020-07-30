import React from 'react';
import { LivroCardContainer } from './styles';

/*
function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).,
      '$7',
    );
}
*/
function LivroCard({ videoTitle, videoURL, categoryColor }) {
  const image = {videoURL};
  return (
    <LivroCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    />
  );
}

export default LivroCard;
