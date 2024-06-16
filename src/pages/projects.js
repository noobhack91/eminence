import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

const ProjectsPage = () => {
  const cards = [
    { id: 1, title: 'Project Card 1', description: 'Content for Project Card 1.' },
    { id: 2, title: 'Project Card 2', description: 'Content for Project Card 2.' },
    { id: 3, title: 'Project Card 3', description: 'Content for Project Card 3.' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Eminence Technology App - Projects</title>
        <meta name="description" content="Projects of Eminence Technology App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="container mx-auto flex flex-col lg:flex-row">
        <Sidebar />

        <main className="flex-1 p-6">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Projects</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <Card key={card.id} title={card.title} description={card.description} />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
