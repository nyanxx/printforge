import { getCategoryBySlug } from "@/app/lib/categories";
import { getModelByCategory } from "@/app/lib/models";
import ModelLayout from "../../components/ModelLayout";

export default async function page({
  params,
}: {
  params: Promise<{ categoriesName: string }>;
}) {
  const { categoriesName } = await params;
  const category = await getCategoryBySlug(categoriesName);
  const categorySpecificModels = await getModelByCategory(category.slug);
  return (
    <ModelLayout
      displayName={category.displayName}
      models={categorySpecificModels}
    />
  );
}
