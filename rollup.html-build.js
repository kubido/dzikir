const htmlTemplate = {
  template: async ({ attributes, files, meta, publicPath, title }) => {
    console.log(Object.keys(files));

    const script = (files.js || [])
      .map(({ fileName }) => {
        return `<script defer src='${fileName}'></script>`;
      })
      .join("\n");

    const css = (files.css || [])
      .map(({ fileName }) => {
        return `<link rel='stylesheet' href='${fileName}'>`;
      })
      .join("\n");
    return `<!DOCTYPE html>
            <html lang="en">
                <head>
                <meta charset='utf-8'>
                <meta name='viewport' content="width=device-width,initial-scale=1,user-scalable=no">
                <meta http-equiv='origin-trial' content='ArcEc1taNHMu4hv4uJ0EqaaarH4y4amJM0PAuYQbWz8jQ7PKsDlfqI60XiQEtUGC6rPyIX0a/w9bErcnW28RDgsAAABReyJvcmlnaW4iOiJodHRwczovL29icy13ZWIubmllay50djo0NDMiLCJmZWF0dXJlIjoiV2FrZUxvY2siLCJleHBpcnkiOjE1OTQxNjYzOTl9'>
                <meta name='apple-mobile-web-app-capable' content='yes'>
                <title>Dzikir Pagi dan Petang</title>
                <link rel='icon' type='image/png' href='favicon.png'>
                ${css}
                <link rel='manifest' href='manifest.json'>
                ${script}
                </head>
                <body>
                </body>
            </html>`;
  },
};

export default htmlTemplate;
