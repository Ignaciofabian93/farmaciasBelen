import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="author" content="Farmacias Belén" />
        <meta name="language" content="spanish" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="safe for kids" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Los mejores precios y una gran variedad en medicamentos"
        />
        <meta
          property="og:url"
          content="https://www.farmaciasbelen.cl"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://www.google.ie/url?sa=i&url=https%3A%2F%2Fpymes.tured.com%2Ffarmacia-belen-en-avenida-santa-luisa-400-b-quilicura%2F&psig=AOvVaw2ae5s8pFj7j3UYxze0FyuT&ust=1669493261881000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCA6JiRyvsCFQAAAAAdAAAAABAE"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="Farmacias Belén"
          key="ogsitename"
        />
        <meta property="og:title" content="Farmacias Belén" key="ogtitle" />
        <meta
          property="og:description"
          content="Los mejores precios y una gran variedad en medicamentos"
          key="ogdesc"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
