import Image from 'next/image';

export default function ImageMask({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="image-container">
      <Image src={src} alt={alt} width={420} height={420} priority />
      <style jsx>
        {`
          .image-container {
            position: relative;
            display: inline-block;
          }

          .image-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              to top,
              rgba(226, 232, 240, 0) 0%,
              rgba(2, 6, 23, 0.75) 100%
            );
            backdrop-filter: blur(2px);
            z-index: 2;
          }
        `}
      </style>
    </div>
  );
}
