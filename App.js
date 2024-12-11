/**
 * TODO 9:
 * - Import semua method FruitController
 * - Refactor variable ke ES6 Variable
 *
 * @hint - Gunakan Destructing Object
 */

import * as FruitController from './FruitController.js';

const { index, store, update, destroy } = FruitController;

/**
 * NOTES:
 * - Fungsi main tidak perlu diubah
 * - Jalankan program: node app.js
 */
const main = () => {
  console.log("Method index - Menampilkan Buah");
  index();
  console.log("\nMethod store - Menambahkan buah Pisang");
  store("Pisang");
  console.log("\nMethod update - Update data 0 menjadi Kelapa");
  update(2, "Kelapa");
  console.log("\nMethod destroy - Menghapus data 0");
  destroy(4);
};

main();