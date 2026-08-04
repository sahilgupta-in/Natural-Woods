// src/Data/allProducts.ts

import { natureProducts } from "./natureProducts";
import { humanFigureProducts } from "./humanFigureProducts";
import { spiritualProducts } from "./spiritualProducts";
import { historicalProducts } from "./historicalProducts";
import { abstractProducts } from "./abstractProducts";
import { animalProducts } from "./animalProducts";
import { woodenSculptureProducts } from "./woodenSculptures";
import { woodenMementoProducts } from "./woodenMementos";
import { pumpkinLampProducts } from "./pumpkinLamps";
import { wallArtProducts } from "./wallArt";
import type { ProductItem } from "./productHelpers";

export const allProducts: ProductItem[] = [
  ...natureProducts,
  ...humanFigureProducts,
  ...spiritualProducts,
  ...historicalProducts,
  ...abstractProducts,
  ...animalProducts,
  ...woodenSculptureProducts,
  ...woodenMementoProducts,
  ...pumpkinLampProducts,
  ...wallArtProducts,
];