import Image from 'next/image';

const MyImage = (props) => (
  <Image
    src={props.src} // Route of the image file
    height={props.height} // Desired size with correct aspect ratio
    width={props.width} // Desired size with correct aspect ratio
    alt={props.alt}
  />
);

export default MyImage;