import { ImageProps } from '../interfaces/Strapi';

export default function Image({ name, image }: ImageProps) {
  const url = Array.isArray(image) ? image[0].url : image.url;

  return (
    <div className=''>
      <img
        src={`${
          url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
        }${url}`}
        className=''
        alt={name}
      />
      <div className=''>{name}</div>
    </div>
  );
}
