import { useRouter } from 'next/router'
import { createContext } from "react";
import { Blocks } from "../components/blocks";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";
import { useTina } from "tinacms/dist/edit-state";
import { Layout } from "../components/layout";

export const ThemeContext = createContext({});

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  return (
    <ThemeContext.Provider value={data.getGlobalDocument.data}>
      <Layout pageData={data.getPagesDocument.data} globalData={data.getGlobalDocument.data}>
        <Blocks {...data.getPagesDocument.data} />
      </Layout>
    </ThemeContext.Provider>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const client = ExperimentalGetTinaClient();
  const tinaProps = await client.ContentQuery({
    relativePath: `index.md`,
  });
  console.log('locale', locale)
  return {
    // redirect: {
    //   destination: 'http://www.google.com',
    //   permanent: false,
    // },
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables,
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
