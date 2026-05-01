import modelsData from "../data/models.json";

export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export async function getAllModels() {
  return modelsData as Model[];
}

export async function getModelById(id: number) {
  try {
    if (typeof id !== "number") throw new Error("Id is not a valid number.");
    const data = modelsData.find((m) => m.id === id);
    return data as Model | undefined;
  } catch (error) {
    throw new Error(`Error Occured:${(error as Error).message}`, {
      cause: error,
    });
  }
}

export async function getModelByCategory(category: string) {
  try {
    if (typeof category !== "string")
      throw new Error("category is not a valid string.");
    const data = modelsData.filter((m) => m.category === category);
    return data as Model[];
  } catch (error) {
    throw new Error(`Error Occured:${(error as Error).message}`, {
      cause: error,
    });
  }
}

export async function getModelBySearch(searchString: string) {
  try {
    if (typeof searchString !== "string")
      throw new Error("searchString is not a valid string.");
    const data = modelsData.filter((m) =>
      m.name.toLowerCase().includes(searchString),
    );
    return data as Model[];
  } catch (error) {
    throw new Error(`Error Occured:${(error as Error).message}`, {
      cause: error,
    });
  }
}
