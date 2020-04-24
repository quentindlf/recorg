export class RecipeModel {
    id: number;
    name: string;
    preparation: string;
    ingredients: [{
        ingredientName: string,
        ingredientNumber: number
    }];
}