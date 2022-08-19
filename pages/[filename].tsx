import { Blocks } from "../components/blocks";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";
import { useTina } from "tinacms/dist/edit-state";
import { Layout } from "../components/layout";

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  console.log(data ? 'we have data' : 'no data')
  if (!data) {
    return <p>Nada</p>
  }
  return (
    <Layout pageData={data.getPagesDocument.data} globalData={data.getGlobalDocument.data}>
      <Blocks {...data.getPagesDocument.data} />
    </Layout>
  );
}

export const getStaticProps = async ({ params, locale }) => {
  console.log('locale', locale)
  console.log('filename', params.filename)

  const client = ExperimentalGetTinaClient();
  const tinaProps = await client.ContentQuery({
    relativePath: `${locale}/${params.filename}.md`,
  });
  return {
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables,
    },
  };
};

export const getStaticPaths = async ({ locales }) => {
  const client = ExperimentalGetTinaClient();
  const pagesListData = await client.getPagesList();
  const paths = [];

  // for each `page` document...
  pagesListData.data.getPagesList.edges.map((page) => {
    // ensure a `path` is created for each `locale`
    locales.map((locale) => {
      paths.push({
        params: { filename: page.node.sys.filename },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: true,
  }
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
  