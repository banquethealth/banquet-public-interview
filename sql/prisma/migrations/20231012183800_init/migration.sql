-- CreateTable
CREATE TABLE "recipes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "tray_orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "scheduled_for" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "tray_order_recipes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipe_id" TEXT NOT NULL,
    "tray_order_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "tray_order_recipes_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tray_order_recipes_tray_order_id_fkey" FOREIGN KEY ("tray_order_id") REFERENCES "tray_orders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
