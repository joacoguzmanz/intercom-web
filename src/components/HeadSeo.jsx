import Head from 'next/head';

const HeadSeo = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel="icon" href="/favicon.svg" sizes="any" />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet={'utf-8'} />
        </Head>
    )
}

export default HeadSeo;