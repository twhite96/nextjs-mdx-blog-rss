import Link from 'next/link';
import Image from 'next/image';

const CustomLink = (props) => {
  const { href } = props;
  const isInternalLink = href && href.startsWith('/');

  const isHeadingLink = href.startsWith('#');

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  } else if (isHeadingLink) {
    return (
      <Link href={href}>
        <a className="anchor" {...props}>
          #
        </a>
      </Link>
    );
  }

  return <a {...props} />;
};

const CustomImage = (props) => {
  return (
    <Image alt="" layout="responsive" loading="lazy" {...props} />
  );
};

const MDXComponents = {
  img: CustomImage,
  a: CustomLink,
};

export default MDXComponents;
