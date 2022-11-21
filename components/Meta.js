import Head from "next/head"

const Meta = ({ keywords, description, title}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="https://th.bing.com/th/id/OIP.HSR9ba6fKi1Rpciqysne3QHaGu?w=233&h=212&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
      <title>{title}</title>
    </Head>
    
  )
}

Meta.defaultProps = {
    keywords: 'Popular Movies',
    description: "Shows Currently Popular Movies",
    title: 'Popular Movies'
}

export default Meta