if (!process.env.MAIN_DB) {
    throw new Error("Missing env var for RecipeDB");
}

export const MAIN_DB:string = process.env.MAIN_DB;  //set to recipes to go prod only

export const ITEM_COLL:string = "Items";

