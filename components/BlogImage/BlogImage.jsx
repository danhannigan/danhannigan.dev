import NextImage from "next/image";

const BlogImage = ({ src, alt, height, width }) => {
  const imageProps = {
    src,
    alt,
    height,
    width,
    layout: "responsive",
  };
  return <NextImage {...imageProps} />;
};

export default BlogImage;
