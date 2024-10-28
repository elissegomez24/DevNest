
import { Footer } from 'flowbite-react';

const DevNestFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer container className="rounded-none">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="https://devnest.com"
            by="DevNest"
            year={currentYear}
          />
          <p>Our Team</p>
          <a className='underline' href="https://github.com/adenman">Aden Neal</a>
          <a className='underline' href="https://github.com/elissegomez24">Elisse Gomez</a>
          <a className='underline' href="https://github.com/Mitchell-610">Dennis Heit</a>
          <a className='underline' href="https://github.com/TayDeveloping">Taylor Tilney</a>

        </div>
      </div>
    </Footer>
  );
};

export default DevNestFooter;