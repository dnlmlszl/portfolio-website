import Link from 'next/link';

const NotFound = () => {
  return (
    <div
      className="bg-cover bg-center w-screen h-[90vh] flex justify-center items-center flex-col text-white text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.3)), url('/images/error.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <h1 className="text-6xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl">
        Sorry, the page you&apos;re looking for does not exist.
      </p>
      <p className="text-xl mt-3">
        <Link href="/">← Back to home</Link>
      </p>
    </div>
  );
};

export default NotFound;
