export default function Container({ children, className = '', as: Tag = 'div' }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-6 md:px-8 lg:px-10 xl:px-12 ${className}`}>
      {children}
    </Tag>
  );
}
