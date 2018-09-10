import { cd, echo, touch } from "shelljs";

echo("Prepare doc deployment");
cd("dist/docs");
touch(".nojekyll");
echo("Preparations complete");
