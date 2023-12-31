import Layout from '../../components/layout';
import { getAllIds, getData } from '../../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
    console.log(itemData)
    return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{itemData.post_title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.post_status}</h6>
          <p className="card-text">{itemData.Acf_fields}</p>
        </div>
      </article>
    </Layout>
  );
}