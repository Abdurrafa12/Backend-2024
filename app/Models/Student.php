<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    //
    protected $table = 'student';
    protected $fillabel = ['nama', 'nim', 'email', 'jurusan'];
    public $timestamps = false;
}

