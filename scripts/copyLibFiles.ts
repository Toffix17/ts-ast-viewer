/* Copies the lib.d.ts files from node_modules into the src directory of the library for easy access */
import * as glob from "glob";
import * as fs from "fs";
import * as path from "path";
import { getCompilerVersions } from "./getCompilerVersions";
import { minifyDeclarationFileText } from "./utils/minifyDeclarationFileText";

const versions = getCompilerVersions();

glob("./src/resources/libFiles/**/*.ts", (err, filesToDelete) => {
    for (const filePath of filesToDelete)
        fs.unlinkSync(filePath);

    const libFilesDir = "./src/resources/libFiles/";
    for (const version of versions) {
        glob(`./node_modules/${version.name}/lib/lib*.d.ts`, (err, filePaths) => {
            const libVersionDir = libFilesDir + version.name + "/";
            if (!fs.existsSync(libVersionDir))
                fs.mkdirSync(libVersionDir);

            for (const filePath of filePaths) {
                const newFilePath = libVersionDir + path.basename(filePath, ".d.ts") + ".ts";
                const fileText = fs.readFileSync(filePath).toString("utf8");
                fs.writeFileSync(newFilePath, `export default {\n`
                    + `    fileName: \`/${path.basename(filePath)}\`,\n`
                    + `    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)\n`
                    + `    text: \`${minifyDeclarationFileText(fileText).replace(/\r?\n/g, "\\n").replace(/`/g, "\\`")}\`\n`
                    + `};`, { encoding: "utf8" });
            }

            fs.writeFileSync(
                libVersionDir + "index.ts",
                filePaths
                    .map(p => path.basename(p, ".d.ts"))
                    .map((p, i) => "export { default as export" + i + " } from \"./" + p + "\";").join("\n") + "\n",
                { encoding: "utf8" }
            );
        });
    }
});
