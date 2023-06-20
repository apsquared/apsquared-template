if (!process.env.MAIN_DB) {
    throw new Error("Missing env var for MAIN_DB");
}

export const MAIN_DB:string = process.env.MAIN_DB;  //set to recipes to go prod only

export const ITEM_COLL:string = "Items";

