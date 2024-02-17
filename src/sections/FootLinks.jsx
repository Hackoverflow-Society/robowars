import Links from "../data/FootLinks";

const FootLinks = () => {
  return (
    <div className="mt-8 w-fit ">
      {Links.map((link, index) => (
        <div key={index} className="mb-4">
          <a href={link.url} className="text-white hover:text-red-500">
            {link.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default FootLinks;
