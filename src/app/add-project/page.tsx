import type { Metadata } from 'next';

import { Main } from '@/templates/Main';

export const metadata: Metadata = {
  title: 'New Router',
  description:
    'Incrementally migrate your existing application from pages to app',
};

const NewRouter = () => (
  <Main>
    <div className="gap2 flex h-screen w-full flex-col items-center justify-start">
      <h1 className="text-3xl font-bold">Add subdomain</h1>
      <p>This page helps you configure subdomains as subroutes</p>
    </div>
  </Main>
);

export default NewRouter;
