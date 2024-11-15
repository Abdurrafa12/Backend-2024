<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HRD extends Model
{
    protected $table = 'hrd';
    protected $fillable = ['id','nama', 'gender', 'nohp', 'alamat', 'email', 'status', 'tgl_masuk'];
    public $timestamps = false;
}


