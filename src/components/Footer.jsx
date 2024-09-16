import { socials } from '../constants';
import Section from './Section';

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <footer className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()} All right reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map(({ id, title, iconUrl, url }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={iconUrl} alt={title} width={16} height={16} />
            </a>
          ))}
        </ul>
      </footer>
    </Section>
  );
};

export default Footer;
