<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class StudenController extends Controller
{
    //
    public function index (){
        //melihat data
        //query builde student = DB::table('student')
        $student = Student::all();

        if ($student->isEmpty()){
            $data = [
                'message' =>'Data tidak ditemukan',
                'data'=>[]
            ];
            return response()->json($data, 404);
        }else
            $data = [
            'message'=> 'berhasil akses data',
            'data'=>$student
        ];
        return response()->json($data,200);

    }

    public function store(Request $request){

        $validateData = $request->validate([
            'nama'=> 'required',
            'nim'=> 'numeric|required',
            'email'=> 'email|required',
            'jurusan'=> 'required'
        ]);


        $student = Student::create($validateData);

        $data = [
            'message'=> 'Student',
            'data' => $student,
        ];

        return response()->json($data, 201);

    }

    public function update(Request $request, $id) {
        $student = Student::find($id);

        if($student) {
            return response()->json([
                'message'=> 'Student not found'
            ], 404);

            $request->validate([
                'nama'=> 'required|string',
                'nim'=> 'required|string|unique:students,nim,'. $id,
                'email'=> 'required|email|unique:students,email,'. $id,
                'jurusan'=> 'required|string'
            ]);

            $input = [
                'nama'=> $request->nama,
                'nim'=> $request->nim,
                'email'=> $request->email,
                'jurusan'=> $request->jurusan
            ];

            $student->update($input);

            return response()->json([
                'message' =>'Student is update',
                'data'=> $student
            ], 200);
    }
}

    public function destroy($id) {
        $student= Student::find($id);

        if($student) {
            $student->delete();

            $data = [
                'message' => 'Student is delete'
            ];

            return response()->json($data, 200);
        }
        else{
            $data = [
                'message' => "Student not found"
            ];

            return response()->json($data, 404);
        }
    }

    public function show($id)
    {
        $student= Student::find($id);

        if ($student){
            $data = [
                'message' => 'Get',
                'data' => $student
            ];

            return response()->json($data, 200);
        }
        else {
            $data = [
                'message' => 'Student not found',
            ];

            return response()->json($data, 404);
        }
    }

}
