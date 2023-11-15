import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';
import { datingSortedList } from '../lib/newdata';






// define a getStaticProps() function - this name is defined by next.js
export async function getStaticProps() {
  const allData = await getSortedList();
  const moreData = await datingSortedList();
  return {
    props: { 
      allData,
      moreData
     }, 
  };
}

// export our home page component Home
export default function Home( { allData, moreData } ) {
  console.log(allData);
  return (
    <Layout home>
      <h1 className='text-center'>Pokemon Cards</h1>
      <div className="list-group">
        {allData && allData.map(
            ({id, name}) => (
              <Link key={id} href={`/cards/${id}`} className="list-group-item list-group-item-action">
                {name}
              </Link>
            )
          )
        }
      </div>
      <h1 className='text-center'>Dating Profiles</h1>
      <div className="list-group">
        {moreData && moreData.map(
            ({id, name}) => (
              <Link key={id} href={`/dating/${id}`} className="list-group-item list-group-item-action">
                {name}
              </Link>
            )
          )
        }
      </div>
    </Layout>
  );
}


