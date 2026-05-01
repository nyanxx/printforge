import { getAllModels } from "../lib/models";
import ModelLayout from "./components/ModelLayout";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const models = await getAllModels();
  console.log(searchParams);
  const { search } = await searchParams;
  const filteredModels = models.filter((m) =>
    m.name.toLowerCase().includes(search?.toLowerCase()) || m.description.toLowerCase().includes(search?.toLowerCase()),
  );

  return (
    <ModelLayout
      displayName="3D Models"
      models={filteredModels.length !== 0 ? filteredModels : models}
    />
  );
}
