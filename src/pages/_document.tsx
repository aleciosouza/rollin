/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../styles/stitches.config';

class RollingDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <style
                        id="stitches"
                        dangerouslySetInnerHTML={{ __html: getCssText() }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default RollingDocument;