import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <header className="border-b border-gray-300">
        <div className="pb-8 pt-16">
          <h1 className="text-3xl font-bold text-gray-900">
            {AppConfig.title}
          </h1>
          <h2 className="text-xl">{AppConfig.description}</h2>
        </div>
        <nav>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link
                href="/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Step 1
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/step1/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Step 2
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/add-project/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Step 3
              </Link>
            </li>
            {/*         <li className="mr-6">
              <Link
                href="/portfolio/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Step 4
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="border-none text-gray-700 hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
               Step 5
              </a>
            </li>
            <li className="mr-6">
              <Link
                href="/blog/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Blog
              </Link>
            </li> */}
          </ul>
        </nav>
      </header>

      <main className="content py-5 text-xl">{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
        love by{' '}
        <a
          className="border-none text-gray-700 hover:text-gray-900"
          href="https://thethunderclap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thunderclap
        </a>
      </footer>
    </div>
  </div>
);

export { Main };
