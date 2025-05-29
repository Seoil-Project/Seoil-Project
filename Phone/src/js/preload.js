const images = require.context('../images', false, /\.(png|jpe?g|svg)$/);

//모든 이미지 미리 로드
images.keys().forEach((key) => {
  const img = new Image();
  img.src = `../images/${key.substring(2)}`;
});