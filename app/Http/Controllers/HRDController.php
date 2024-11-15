<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HRDController extends Controller
{
    public function index(){
        echo "Menampilkan data HRD";
    }

    public function store(Request $request){
        $input = [
            'id'=> $request->id,
            'nama'=> $request->nama,
            'gender'=> $request->gender,
            'nohp'=> $request->nohp,
            'alamat'=> $request->alamat,
            'email'=> $request->email,
            'status'=>$request->status,
            'tgl_masuk'=> $request->tanggal_masuk
        ];
    }

    public function update(Request $request, $id){

        if($pegawai){

        }
    }


}
