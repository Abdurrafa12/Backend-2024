<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudenController extends Controller
{
    //
    public function index (){
        //melihat data
        //query builde student = DB::table('student')
        $student = Student::all();
        $data = [
            'massage'=> 'berhasil akses data',
            'data'=>$student
        ];
        return response()->json($data,200);

    }

    public function store(Request $request){
        $input = [
            'nama'=> $request->nama,
            'nim'=> $request->nim,
            'email'=> $request->email,
            'jurusan'=> $request->jurusan

        ];

        $student = Student::create($input);
        $data =[
            'massage'=> 'data berhasil dibuat',
            'data'=> $student,
        ];
        return response()->json($data,201);
    }

    public function update(Request $request, $id){
        $student = Student::find($id);

        if($student){
            $input = [
                'nama'=> $request->nama ?? $student->nama,
                'nim'=> $request->nim ?? $student->nim,
                'email'=> $request->email ?? $student->email,
                'jurusan'=> $request->jurusan ?? $student->jurusan
            ];

            $student->update($input);

            $data= [
                'massage' =>'Student is update',
                'data'=> $student
            ];

            return response()->json($data, 200);

        }else{
            $data = [
                'massage'=> 'Student not found'
            ];

            return response()->json($data, 404);

        }

    }
    public function destroy($id){
        $student= Student::find($id);

        if($student){
            $student->delete();

            $data =[
                'massage' => 'Student is delete'
            ];

            return response()->json($data,200);
        }
        else{
            $data =[
                'massage' => "Student not found"
            ];

            return response()->json($data, 404);
        }
    }

}
