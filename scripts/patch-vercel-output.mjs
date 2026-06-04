import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const functionDir = ".vercel/output/functions/__server.func";
const indexPath = join(functionDir, "index.mjs");
const handlerPath = join(functionDir, "_chunks/tanstack-start-handler.mjs");

const rendererImport = 'import("./_chunks/renderer-template.mjs")';
const startHandlerImport = 'import("./_chunks/tanstack-start-handler.mjs")';

const handlerSource = `import server from "../_ssr/index.mjs";

export default function tanstackStartHandler(event) {
  return server.fetch(event.req);
}
`;

let indexSource = await readFile(indexPath, "utf8");

if (!indexSource.includes(rendererImport)) {
  throw new Error(
    `Could not find Nitro renderer-template route in ${indexPath}. The generated output shape changed.`,
  );
}

indexSource = indexSource.replace(rendererImport, startHandlerImport);

await mkdir(dirname(handlerPath), { recursive: true });
await writeFile(handlerPath, handlerSource);
await writeFile(indexPath, indexSource);

console.log(
  "Patched Vercel output to route requests through TanStack Start SSR.",
);
