// By default it provides SSR...
import Layout from '../src/hoc/staticLayout'; 
import HomePageContent from '../src/components/static/index'; 

import { withUserAgent } from 'next-useragent';

function LandingPage(props) {
  
  const meta = {
    title: `Ticket Management`,
    description: `description`,
    image_url:   ``,
    keywords: ``,
    route: "/",
  }
  return (
    <>
      <Layout meta={meta}>
        <HomePageContent />
      </Layout>
    </>
  );
}

export default withUserAgent(LandingPage);
