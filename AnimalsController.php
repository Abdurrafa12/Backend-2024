<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalsController extends Controller
{

    public function __construct() {
        $this->animals - ['Kucing', 'Anjing','Ayam'];
    }
    public function index()
    {
        if (empty($this->animals)) {
            echo "Tidak ada hewan.";
        } else {
            foreach ($this->animals as $animal) {
                echo $animal . "<br>";
            }
        }
    }

    # method store - menambahkan hewan baru
    # parameter: hewan baru
    public function item ($data)
    {
        array_push($this->animals, $data);
    }

    # method update - mengupdate hewan
    # parameter: index dan hewan baru
    public function edit($index, $data)
    {
        if (isset($this->animals[$index])) {
            $this->animals[$index] = $data;
        } else {
            echo "Hewan tidak ditemukan pada index " . $index . "<br>";
        }
    }

    # method delete - menghapus hewan
    # parameter: index
    public function destroy($index)
    {
        if (isset($this->animals[$index])) {
            array_splice($this->animals, $index, 1);
        } else {
            echo "Hewan tidak ditemukan pada index " . $index . "<br>";
        }
    }
}

# membuat object
# kirimkan data hewan (array) ke constructor
$animal = new AnimalsController(['Ular', 'Ayam']);

echo "Index - Menampilkan seluruh hewan <br>";
$animal->index();
echo "<br>";

echo "Store - Menambahkan hewan baru <br>";
$animal->store('Kodok');
$animal->index();
echo "<br>";

echo "Update - Mengupdate hewan <br>";
$animal->update(0, 'Beruang');
$animal->index();
echo "<br>";

echo "Destroy - Menghapus hewan <br>";
$animal->destroy(1);
$animal->index();
echo "<br>";

