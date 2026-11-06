import { Config } from "effect";
import { main } from "./dist/process.js";

const args = process.argv.slice(2);
const config = Config.parse(Config.Record(Config.String, Config.String), Object.fromEntries(args.map((a) => a.split("="))));

await main(config);
