import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API TheMealDB
const API_BASE = "https://www.themealdb.com/api/json/v1/1";

// Catégories (page d'accueil)
export const fetchCategories = createAsyncThunk(
  "restaurants/fetchCategories",
  async () => {
    const res = await fetch(`${API_BASE}/categories.php`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!data.categories) throw new Error("Aucune catégorie trouvée");
    // On mappe pour ressembler à des 'restaurants'
    return data.categories.map(c => ({
      id: c.idCategory,
      name: c.strCategory,
      image: c.strCategoryThumb,
      description: c.strCategoryDescription,
      rating: Math.round((Math.random() * 1.5 + 3.5) * 10) / 10, // 3.5–5.0 (fake rating)
    }));
  }
);

// Plats par catégorie (menu)
export const fetchMealsByCategory = createAsyncThunk(
  "restaurants/fetchMealsByCategory",
  async (categoryName) => {
    const res = await fetch(`${API_BASE}/filter.php?c=${encodeURIComponent(categoryName)}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!data.meals) throw new Error("Menu vide pour cette catégorie");
    // On ajoute un prix simulé pour le panier (ex: 50–120 MAD)
    const priced = data.meals.map(m => ({
      id: m.idMeal,
      name: m.strMeal,
      image: m.strMealThumb,
      price: 50 + (parseInt(m.idMeal.slice(-2), 10) % 71), // 50..120
    }));
    return { categoryName, meals: priced };
  }
);

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    categories: [],            // liste d'“établissements”
    statusCategories: "idle",
    errorCategories: null,

    menusByCategory: {},       // { [categoryName]: Meal[] }
    statusMeals: "idle",
    errorMeals: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Categories
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.statusCategories = "loading";
        state.errorCategories = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.statusCategories = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.statusCategories = "failed";
        state.errorCategories = action.error.message;
      });

    // Meals (menu) par catégorie
    builder
      .addCase(fetchMealsByCategory.pending, (state) => {
        state.statusMeals = "loading";
        state.errorMeals = null;
      })
      .addCase(fetchMealsByCategory.fulfilled, (state, action) => {
        state.statusMeals = "succeeded";
        state.menusByCategory[action.payload.categoryName] = action.payload.meals;
      })
      .addCase(fetchMealsByCategory.rejected, (state, action) => {
        state.statusMeals = "failed";
        state.errorMeals = action.error.message;
      });
  },
});

export default restaurantsSlice.reducer;
