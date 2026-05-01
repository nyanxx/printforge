import modelCategories from "@/app/data/categories.json";

export type Category = {
  displayName: string;
  slug: string;
};

export type CategoriesData = {
  categories: Category[];
};

export async function getAllCategories(): Promise<Category[]> {
  return modelCategories as Category[];
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const category = modelCategories.find((c) => c.slug === slug);
  if (!category) {
    throw new Error(`Category with slug ${slug} not found`);
  }
  return category as Category;
}

export async function getDisplayNameFromSlug(
  slug: string,
): Promise<Category["displayName"]> {
  const category = await getCategoryBySlug(slug);
  return (category as Category).displayName;
}
