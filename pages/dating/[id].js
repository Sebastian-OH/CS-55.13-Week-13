import Layout from '../../components/layout';
import { datingIds, datingData } from '../../lib/newdata';

export async function getStaticProps({ params }) {
  const itemData = await datingData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = await datingIds();
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
          <h5 className="card-title">{itemData.post_type}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.post_title}</h6>
          <p className="card-text">{itemData.post_content}</p>
          <a href={'mailto:' + itemData.email} className="card-link">{itemData.post_status}</a>
        </div>
      </article>
    </Layout>
  );
}